> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/1557099-iocopysystemloadadvisorydetailed

# IOCopySystemLoadAdvisoryDetailed

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Function  
**Availability:** Mac Catalyst 18.4+ · macOS 10.6+

Indicates how user activity, battery level, and thermal level each contribute to the overall "SystemLoadAdvisory" level. In the future, this combined level may represent new levels as well.

## Declaration

```objectivec
CFDictionaryRef IOCopySystemLoadAdvisoryDetailed(void);
```

<a id="return_value"></a>

## Return Value

Returns a CFDictionaryRef, or NULL on error. Caller must release the returned dictionary.

<a id="discussion"></a>

## Discussion

See dictionary keys defined above.

## See Also

### IOSystemLoadAdvisory

- [IOGetSystemLoadAdvisory](1557110-iogetsystemloadadvisory.md): Returns a hint about whether now would be a good time to perform time-insensitive work.
