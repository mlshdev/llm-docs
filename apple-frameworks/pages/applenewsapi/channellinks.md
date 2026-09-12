> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsapi/channellinks](https://developer.apple.com/documentation/applenewsapi/channellinks)

# ChannelLinks

**Interface language:** Data

**Framework:** Apple News API  
**Kind:** Object  
**Availability:** Apple News API 1.0+

See the links the read channel endpoint returned.

## Declaration

```
object ChannelLinks
```

## Properties

- `defaultSection` — `string`: The URL for this channel’s default section. Every channel has a default section, even if no others are defined.
- `self` — `string`: The URL at which you can read the article.

## Mentioned In

- [Signing the HTTP Request](../applenews/signing-the-http-request.md)

## Relationships

### Inherited By

- [ChannelResponse](channelresponse.md)

## See Also

### Channel

- [Read Channel Information](get-channels-_channelid_.md): Get details about your channel, including the name, corresponding website, and default section.
- [Read Channel Quota Information](get-channels-_channelid_-quota.md): Get details about your channel’s remaining quota for sending create and update requests, the queue size, and wait time.
- [Channel](channel.md): See the fields the read channel endpoint returned.
- [ChannelResponse](channelresponse.md): See which objects make up the channel response.
