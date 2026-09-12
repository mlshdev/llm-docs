> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/composedstring(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/composedstring(_:))

# composedString(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Return the current composed string.

## Declaration

```swift
func composedString(_ sender: Any!) -> Any!
```

## Parameters

- `sender`: The client object requesting the string.

<a id="return-value"></a>

## Return Value

The current composed string, which can be an `NSString` or `NSAttributedString` object. The returned object should be an autoreleased object.

<a id="Discussion"></a>

## Discussion

A composed string refers to the buffer that an input method typically maintains to mirror the text contained in the active inline area. It is called the composed string to reflect the fact that the input method composed the string by converting the characters input by the user. In addition, using the term composed string makes it easier to differentiate between an input method  buffer and the text in the active inline area that the user sees.

# composedString: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Return the current composed string.

## Declaration

```objectivec
- (id) composedString:(id) sender;
```

## Parameters

- `sender`: The client object requesting the string.

<a id="return-value"></a>

## Return Value

The current composed string, which can be an `NSString` or `NSAttributedString` object. The returned object should be an autoreleased object.

<a id="Discussion"></a>

## Discussion

A composed string refers to the buffer that an input method typically maintains to mirror the text contained in the active inline area. It is called the composed string to reflect the fact that the input method composed the string by converting the characters input by the user. In addition, using the term composed string makes it easier to differentiate between an input method  buffer and the text in the active inline area that the user sees.
