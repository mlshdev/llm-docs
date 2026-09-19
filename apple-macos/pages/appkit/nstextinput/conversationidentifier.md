> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextinput/conversationidentifier

# conversationIdentifier

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.6)

Returns a number used to identify the receiver’s context to the input server.

## Declaration

```objectivec
- (NSInteger) conversationIdentifier;
```

<a id="return-value"></a>

## Return Value

The identifying number of the receiver.

<a id="Discussion"></a>

## Discussion

Each text view within an application should return a unique identifier (typically its address). However, multiple text views sharing the same text storage must all return the same identifier.
