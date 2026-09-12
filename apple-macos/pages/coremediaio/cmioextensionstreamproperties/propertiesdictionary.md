> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensionstreamproperties/propertiesdictionary](https://developer.apple.com/documentation/coremediaio/cmioextensionstreamproperties/propertiesdictionary)

# propertiesDictionary (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary representation of the property state.

## Declaration

```swift
var propertiesDictionary: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>] { get set }
```

## See Also

### Managing Property State

- [setPropertyState(\_:forProperty:)](setpropertystate%28__forproperty_%29.md): Sets the state of the specified property.

# propertiesDictionary (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

A dictionary representation of the property state.

## Declaration

```objectivec
@property (atomic, copy) NSDictionary<NSString *,CMIOExtensionPropertyState *> * propertiesDictionary;
```

## See Also

### Managing Property State

- [setPropertyState:forProperty:](setpropertystate%28__forproperty_%29.md): Sets the state of the specified property.
