> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/originalstring(_:)](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/originalstring(_:))

# originalString(\_:) (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Return the string that consists of the precomposed Unicode characters.

## Declaration

```swift
func originalString(_ sender: Any!) -> NSAttributedString!
```

## Parameters

- `sender`: The client object requesting the original string.

<a id="return-value"></a>

## Return Value

The original string of precomposed unicode characters. If an input method stores the original input text, it returns that text. The return value is an attributed string so that the input method can restore changes they made to the font, and other attributes, if necessary. The returned object should be an autoreleased object.

# originalString: (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** macOS

Return the string that consists of the precomposed Unicode characters.

## Declaration

```objectivec
- (NSAttributedString *) originalString:(id) sender;
```

## Parameters

- `sender`: The client object requesting the original string.

<a id="return-value"></a>

## Return Value

The original string of precomposed unicode characters. If an input method stores the original input text, it returns that text. The return value is an attributed string so that the input method can restore changes they made to the font, and other attributes, if necessary. The returned object should be an autoreleased object.
