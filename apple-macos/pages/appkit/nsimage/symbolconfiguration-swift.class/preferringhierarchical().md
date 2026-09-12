> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/symbolconfiguration-swift.class/preferringhierarchical()](https://developer.apple.com/documentation/appkit/nsimage/symbolconfiguration-swift.class/preferringhierarchical())

# preferringHierarchical() (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a configuration that specifies that the symbol should prefer its hierarchical variant, if one exists.

## Declaration

```swift
class func preferringHierarchical() -> Self
```

<a id="discussion"></a>

## Discussion

If the symbol doesn’t support hierarchical, the result will be a monochrome (templated) symbol.

## See Also

### Type Methods

- [preferringMonochrome()](preferringmonochrome%28%29.md): Creates a configuration that specifies that the symbol should prefer its monochrome variant.

# configurationPreferringHierarchical (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a configuration that specifies that the symbol should prefer its hierarchical variant, if one exists.

## Declaration

```objectivec
+ (instancetype) configurationPreferringHierarchical;
```

<a id="discussion"></a>

## Discussion

If the symbol doesn’t support hierarchical, the result will be a monochrome (templated) symbol.

## See Also

### Type Methods

- [configurationPreferringMonochrome](preferringmonochrome%28%29.md): Creates a configuration that specifies that the symbol should prefer its monochrome variant.
