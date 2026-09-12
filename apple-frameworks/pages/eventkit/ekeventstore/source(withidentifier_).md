> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/eventkit/ekeventstore/source(withidentifier:)](https://developer.apple.com/documentation/eventkit/ekeventstore/source(withidentifier:))

# source(withIdentifier:) (Swift)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates an event source with the specified identifier.

## Declaration

```swift
func source(withIdentifier identifier: String) -> EKSource?
```

## Parameters

- `identifier`: The source’s unique identifier.

<a id="return-value"></a>

## Return Value

The source with the specified identifier, or `nil` if the source isn’t found.

## See Also

### Accessing account sources

- [sources](sources.md): An unordered array of objects that represent accounts that contain calendars.
- [delegateSources](delegatesources.md): The event sources delegated to the person using your app.

# sourceWithIdentifier: (Objective-C)

**Framework:** EventKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · visionOS 1.0+ · watchOS 2.0+

Locates an event source with the specified identifier.

## Declaration

```objectivec
- (EKSource *) sourceWithIdentifier:(NSString *) identifier;
```

## Parameters

- `identifier`: The source’s unique identifier.

<a id="return-value"></a>

## Return Value

The source with the specified identifier, or `nil` if the source isn’t found.

## See Also

### Accessing account sources

- [sources](sources.md): An unordered array of objects that represent accounts that contain calendars.
- [delegateSources](delegatesources.md): The event sources delegated to the person using your app.
