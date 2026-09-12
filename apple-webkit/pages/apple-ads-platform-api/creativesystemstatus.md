> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativesystemstatus](https://developer.apple.com/documentation/apple-ads-platform-api/creativesystemstatus)

# CreativeSystemStatus

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

System-evaluated validation state for an ad creative.

## Declaration

```
string CreativeSystemStatus
```

## Possible Values

- `VALID`: The ad creative has passed all system validation checks and is ready to serve. The ad creative may still be subject to additional review.
- `INVALID`: The ad creative has failed one or more validation checks. Check `systemStatusReasons` for the cause.
- `PENDING`: The ad creative is undergoing system validation, policy determination, or waiting for asset CDN availability.

<a id="Discussion"></a>

## Discussion

The `CreativeSystemStatus` is a read-only field that reflects whether an ad creative has passed all system validation checks and is eligible to serve.

When the status isn’t `VALID`, inspect `systemStatusReasons` on the [Creative](creative.md) object to determine the specific blocking condition.

## See Also

- [CreativeType](creativetype.md): Enum identifying the visual format and placement context of an ad creative.
- [CreativeSystemStatusReason](creativesystemstatusreason.md): A reason code explaining why an ad creative isn’t valid or is pending review.
- [DestinationType](destinationtype.md): Specifies where an ad sends users after they tap it.
