> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjectchangedetails/objectbeforechanges](https://developer.apple.com/documentation/photos/phobjectchangedetails/objectbeforechanges)

# objectBeforeChanges (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that reflects the original state of the asset or collection it represents.

## Declaration

```swift
var objectBeforeChanges: ObjectType { get }
```

<a id="Discussion"></a>

## Discussion

This property’s value is the same object you passed to the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) to request change details.

## See Also

### Getting the Changed Object

- [objectAfterChanges](objectafterchanges.md): An object that reflects the current state of the asset or collection it represents.

# objectBeforeChanges (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that reflects the original state of the asset or collection it represents.

## Declaration

```objectivec
@property (atomic, strong, readonly) ObjectType objectBeforeChanges;
```

<a id="Discussion"></a>

## Discussion

This property’s value is the same object you passed to the [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) to request change details.

## See Also

### Getting the Changed Object

- [objectAfterChanges](objectafterchanges.md): An object that reflects the current state of the asset or collection it represents.
