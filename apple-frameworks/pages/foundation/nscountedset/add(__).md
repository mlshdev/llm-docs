> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nscountedset/add(_:)](https://developer.apple.com/documentation/foundation/nscountedset/add(_:))

# add(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given object to the set.

## Declaration

```swift
func add(_ object: Any)
```

## Parameters

- `object`: The object to add to the set.

<a id="Discussion"></a>

## Discussion

If `object` is already a member, [add(\_:)](add%28__%29.md) increments the count associated with the object. If `object` is not already a member, it is sent a [retain](../../objectivec/nsobject-c.protocol/retain.md) message.

## See Also

### Adding and Removing Entries

- [remove(\_:)](remove%28__%29.md): Removes a given object from the set.

# addObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds a given object to the set.

## Declaration

```objectivec
- (void) addObject:(ObjectType) object;
```

## Parameters

- `object`: The object to add to the set.

<a id="Discussion"></a>

## Discussion

If `object` is already a member, [addObject:](add%28__%29.md) increments the count associated with the object. If `object` is not already a member, it is sent a [retain](../../objectivec/nsobject-c.protocol/retain.md) message.

## See Also

### Adding and Removing Entries

- [removeObject:](remove%28__%29.md): Removes a given object from the set.
