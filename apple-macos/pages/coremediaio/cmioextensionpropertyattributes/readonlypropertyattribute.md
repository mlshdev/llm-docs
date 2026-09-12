> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionpropertyattributes/readonlypropertyattribute](https://developer.apple.com/documentation/coremediaio/cmioextensionpropertyattributes/readonlypropertyattribute)

# readOnlyPropertyAttribute (Swift)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A class property for a read-only property attribute.

## Declaration

```swift
class var readOnlyPropertyAttribute: CMIOExtensionPropertyAttributes<AnyObject> { get }
```

<a id="Discussion"></a>

## Discussion

The attribute doesn’t contain values for its [minValue](minvalue.md), [maxValue](maxvalue.md), or [validValues](validvalues.md) properties.

# readOnlyPropertyAttribute (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Type Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A class property for a read-only property attribute.

## Declaration

```objectivec
@property (class, readonly) CMIOExtensionPropertyAttributes * readOnlyPropertyAttribute;
```

<a id="Discussion"></a>

## Discussion

The attribute doesn’t contain values for its [minValue](minvalue.md), [maxValue](maxvalue.md), or [validValues](validvalues.md) properties.
