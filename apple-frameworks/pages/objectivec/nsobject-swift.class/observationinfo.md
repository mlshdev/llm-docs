> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/observationinfo](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/observationinfo)

# observationInfo (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer that identifies information about all of the observers that are registered with the observed object.

## Declaration

```swift
var observationInfo: UnsafeMutableRawPointer? { get set }
```

<a id="return-value"></a>

## Return Value

A pointer that identifies information about all of the observers that are registered with the observed object, the options that were used at registration-time, and so on.

<a id="Discussion"></a>

## Discussion

The default implementation of this method retrieves the information from a global dictionary of observed objects keyed by memory addresses.

For improved performance, both this property and [observationInfo](observationinfo.md) can be overridden to store the opaque data pointer in an instance variable. Overrides of this property must not attempt to send messages to the stored data.

## See Also

### Observing Customization

- [automaticallyNotifiesObservers(forKey:)](automaticallynotifiesobservers%28forkey_%29.md): Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.
- [keyPathsForValuesAffectingValue(forKey:)](keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [NSKeyValueObservingCustomization](../../foundation/nskeyvalueobservingcustomization.md): Conforming to NSKeyValueObservingCustomization is not required to use Key-Value Observing. Provide an implementation of these functions if you need to disable auto-notifying for a key, or add dependent keys

# observationInfo (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a pointer that identifies information about all of the observers that are registered with the observed object.

## Declaration

```objectivec
@property (nullable) void * observationInfo;
```

<a id="return-value"></a>

## Return Value

A pointer that identifies information about all of the observers that are registered with the observed object, the options that were used at registration-time, and so on.

<a id="Discussion"></a>

## Discussion

The default implementation of this method retrieves the information from a global dictionary of observed objects keyed by memory addresses.

For improved performance, both this property and [observationInfo](observationinfo.md) can be overridden to store the opaque data pointer in an instance variable. Overrides of this property must not attempt to send messages to the stored data.

## See Also

### Observing Customization

- [automaticallyNotifiesObserversForKey:](automaticallynotifiesobservers%28forkey_%29.md): Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.
- [keyPathsForValuesAffectingValueForKey:](keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [setKeys:triggerChangeNotificationsForDependentKey:](setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
