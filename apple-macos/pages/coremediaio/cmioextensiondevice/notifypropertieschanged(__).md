> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/coremediaio/cmioextensiondevice/notifypropertieschanged(_:)](https://developer.apple.com/documentation/coremediaio/cmioextensiondevice/notifypropertieschanged(_:))

# notifyPropertiesChanged(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients of property changes.

## Declaration

```swift
func notifyPropertiesChanged(_ propertyStates: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertyStates`: A dictionary of changed properties.

# notifyPropertiesChanged: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients of property changes.

## Declaration

```objectivec
- (void) notifyPropertiesChanged:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertyStates;
```

## Parameters

- `propertyStates`: A dictionary of changed properties.
