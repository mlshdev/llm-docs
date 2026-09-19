> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremediaio/cmioextensionstream/notifypropertieschanged(_:)

# notifyPropertiesChanged(\_:) (Swift)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients about stream property changes.

## Declaration

```swift
func notifyPropertiesChanged(_ propertyStates: [CMIOExtensionProperty : CMIOExtensionPropertyState<AnyObject>])
```

## Parameters

- `propertyStates`: A dictionary of properties that contain new state values.

# notifyPropertiesChanged: (Objective-C)

**Framework:** Core Media I/O  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 15.4+ · macOS 12.3+

Notifies clients about stream property changes.

## Declaration

```objectivec
- (void) notifyPropertiesChanged:(NSDictionary<NSString *,CMIOExtensionPropertyState *> *) propertyStates;
```

## Parameters

- `propertyStates`: A dictionary of properties that contain new state values.
