> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginekit/betextinput/extendedtextinputtraits

# extendedTextInputTraits (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that customizes text-input appearance and behavior beyond the standard system traits.

## Declaration

```swift
var extendedTextInputTraits: (any BEExtendedTextInputTraits)? { get }
```

## See Also

### Managing text traits

- [isEditable](iseditable.md): A Boolean value that determines the ability to modify text.

# extendedTextInputTraits (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · tvOS 17.4+ · visionOS 1.1+

An object that customizes text-input appearance and behavior beyond the standard system traits.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<BEExtendedTextInputTraits> extendedTextInputTraits;
```

## See Also

### Managing text traits

- [editable](iseditable.md): A Boolean value that determines the ability to modify text.
