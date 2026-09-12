> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/get-channels-_channelid_-quota](https://developer.apple.com/documentation/applenewsapi/get-channels-_channelid_-quota)

# Read Channel Quota Information

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Web Service Endpoint  
**Availability:** Apple News API 2.1+

Get details about your channel’s remaining quota for sending create and update requests, the queue size, and wait time.

## URL

```http
GET https://news-api.apple.com/channels/{channelId}/quota
```

## Path Parameters

- `channelId` — `string` (required): The UUID of the channel. You can get your channel ID from News Publisher. See [Use your CMS with News Publisher](https://support.apple.com/guide/news-publisher/apd88c8447e6) in News Publisher User Guide.

## Response Codes

- `200` OK — `Throttling`: The request was successful.
- `400` Bad Request — `Error`: `MISSING`. You didn’t include the Channel UUID field in the request. Key path: \*
- `401` Unauthorized — `Error`: You didn’t include the `Authorization` header. Key path: None.
- `403` Forbidden — `Error`: You tried to access a channel your API key doesn’t have permission to access. Key path: None.
- `404` Not Found — `Error`: - The endpoint you tried to access doesn’t exist. Key path: None.
  - The channel you tried to access doesn’t exist. Key path: `channel_id`.

<a id="Discussion"></a>

## Discussion

A Read Channel Quota Information request returns the publisher’s remaining create and update request quota, the queue size, and estimated wait time. This information is also available through the [Meta](meta.md) object when you use the [Create an Article](post-channels-_channelid_-articles.md) and [Update an Article](post-articles-_articleid_.md) endpoints.

<a id="Example"></a>

### Example

**Request**

```
GET /channels/63a75491-2c4d-3530-af91-819be8c3ace0/quota
Host: news-api.apple.com
Accept: application/json
Authorization: HHMAC; key="1e3gfc5e-e9f8-4232-a6be-17bf40edad09"; signature="mLtpym3Lgl1300t8cze9wyWOaxkRBKL3j3ztalMjgWs="; date="2015-03-05T02:49:58Z"
```

**Response**

```json
HTTP/1.1 200 OK
Date: Tue, 28 May 2019 20:40:29 GMT
Request-Id: d4ef2ad0-8188-11e9-ac39-815bb6436c0b
Content-Type: application/json;charset=utf-8
Transfer-Encoding: chunked
{
    "isThrottled": false,
    "queueSize": 0,
    "estimatedDelayInSeconds": 0,
    "quotaAvailable": 200
}
```

## See Also

### Channel

- [Read Channel Information](get-channels-_channelid_.md): Get details about your channel, including the name, corresponding website, and default section.
- [Channel](channel.md): See the fields the read channel endpoint returned.
- [ChannelLinks](channellinks.md): See the links the read channel endpoint returned.
- [ChannelResponse](channelresponse.md): See which objects make up the channel response.
