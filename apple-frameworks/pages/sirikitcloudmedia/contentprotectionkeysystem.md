> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/contentprotectionkeysystem

# ContentProtectionKeySystem

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Type  
**Availability:** SiriKit Cloud Media 1.0.2+

The content protection key systems that SiriKit Cloud Media supports.

## Declaration

```
string ContentProtectionKeySystem
```

## Possible Values

- `ContentKeySystemFairPlayStreaming`: FairPlay Streaming. For more information, see [FairPlay Streaming](https://developer.apple.com/streaming/fps).

## See Also

### Content Protection

- [Retrieve an Asset’s Content Protection Key](contentprotectionkey.md): Provide the content key for a specific protected asset.
- [ContentProtectionKeyRequest](contentprotectionkeyrequest.md): A request for an item’s content protection key.
- [ContentProtectionKeyResponse](contentprotectionkeyresponse.md): A response to a request for an item’s content protection key.
