start cmd /k "D:\Programs\kafka_2.12-2.2.0\bin\windows\zookeeper-server-start.bat D:\Programs\kafka_2.12-2.2.0\config\zookeeper.properties"
start cmd /k "ping 127.1 -n "6">nul&&D:\Programs\kafka_2.12-2.2.0\bin\windows\kafka-server-start.bat D:\Programs\kafka_2.12-2.2.0\config\server.properties"
start cmd /k "ping 127.1 -n "12">nul&&elasticsearch.bat"