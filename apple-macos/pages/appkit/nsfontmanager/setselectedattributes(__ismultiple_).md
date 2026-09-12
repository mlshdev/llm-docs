> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/setselectedattributes(_:ismultiple:)](https://developer.apple.com/documentation/appkit/nsfontmanager/setselectedattributes(_:ismultiple:))

# setSelectedAttributes(\_:isMultiple:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the Font panel that the specified font attributes changed for the selected text.

## Declaration

```swift
func setSelectedAttributes(_ attributes: [String : Any], isMultiple flag: Bool)
```

## Parameters

- `attributes`: The new attributes.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), informs the panel that multiple fonts or attributes are enclosed within the selection.

<a id="Discussion"></a>

## Discussion

This method is used primarily by `NSTextView`.

## See Also

### Setting Attributes

- [convertAttributes(\_:)](convertattributes%28__%29.md): Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.

# setSelectedAttributes:isMultiple: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Informs the Font panel that the specified font attributes changed for the selected text.

## Declaration

```objectivec
- (void) setSelectedAttributes:(NSDictionary<NSString *,id> *) attributes isMultiple:(BOOL) flag;
```

## Parameters

- `attributes`: The new attributes.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), informs the panel that multiple fonts or attributes are enclosed within the selection.

<a id="Discussion"></a>

## Discussion

This method is used primarily by `NSTextView`.

## See Also

### Setting Attributes

- [convertAttributes:](convertattributes%28__%29.md): Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.
