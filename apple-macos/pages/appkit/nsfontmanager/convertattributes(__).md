> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsfontmanager/convertattributes(_:)](https://developer.apple.com/documentation/appkit/nsfontmanager/convertattributes(_:))

# convertAttributes(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.

## Declaration

```swift
func convertAttributes(_ attributes: [String : Any] = [:]) -> [String : Any]
```

## Parameters

- `attributes`: The current attributes.

<a id="return-value"></a>

## Return Value

The converted attributes, or `attributes` itself if the conversion isn’t possible.

<a id="Discussion"></a>

## Discussion

Attributes unused by the sender should not be changed or removed.

This method is usually invoked on the sender of [changeAttributes(\_:)](../nstextview/changeattributes%28__%29.md). See [Working with the Font Manager](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/FontHandling/FontHandling.html#//apple_ref/doc/uid/TP40009459-CH5-SW9) for more information.

## See Also

### Setting Attributes

- [setSelectedAttributes(\_:isMultiple:)](setselectedattributes%28__ismultiple_%29.md): Informs the Font panel that the specified font attributes changed for the selected text.

# convertAttributes: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Converts attributes in response to an object initiating an attribute change, typically the Font panel or Font menu.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) convertAttributes:(NSDictionary<NSString *,id> *) attributes;
```

## Parameters

- `attributes`: The current attributes.

<a id="return-value"></a>

## Return Value

The converted attributes, or `attributes` itself if the conversion isn’t possible.

<a id="Discussion"></a>

## Discussion

Attributes unused by the sender should not be changed or removed.

This method is usually invoked on the sender of [changeAttributes:](../nstextview/changeattributes%28__%29.md). See [Working with the Font Manager](https://developer.apple.com/library/archive/documentation/TextFonts/Conceptual/CocoaTextArchitecture/FontHandling/FontHandling.html#//apple_ref/doc/uid/TP40009459-CH5-SW9) for more information.

## See Also

### Setting Attributes

- [setSelectedAttributes:isMultiple:](setselectedattributes%28__ismultiple_%29.md): Informs the Font panel that the specified font attributes changed for the selected text.
