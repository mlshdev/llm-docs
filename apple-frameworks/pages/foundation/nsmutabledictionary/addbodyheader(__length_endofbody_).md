> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmutabledictionary/addbodyheader(_:length:endofbody:)

# addBodyHeader(\_:length:endOfBody:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

## Declaration

```swift
func addBodyHeader(_ inHeaderData: UnsafeRawPointer!, length inHeaderDataLength: UInt32, endOfBody isEndOfBody: Bool) -> OBEXError
```

# addBodyHeader:length:endOfBody: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

## Declaration

```objectivec
- (OBEXError) addBodyHeader:(const void *) inHeaderData length:(uint32_t) inHeaderDataLength endOfBody:(BOOL) isEndOfBody;
```
