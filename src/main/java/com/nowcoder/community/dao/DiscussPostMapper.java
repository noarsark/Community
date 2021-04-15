package com.nowcoder.community.dao;

import com.nowcoder.community.entity.DiscussPost;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DiscussPostMapper {

    List<DiscussPost> selectDiscussPosts(int userId, int offset, int limit);

    /**
     * 查询userId发表的帖子数量
     * @ Param注解用于给参数取别名
     * 如果只用一个参数, 并且在<if>里使用， 则必须加别名
     * @param userId
     * @return
     */
    int selectDiscussPostRows(@Param("userId") int userId);

    int insertDisscussPost(DiscussPost discussPost);

    DiscussPost selectDiscussPostById(int id);

}
