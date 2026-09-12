> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phobjectchangedetails/objectafterchanges](https://developer.apple.com/documentation/photos/phobjectchangedetails/objectafterchanges)

# objectAfterChanges (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that reflects the current state of the asset or collection it represents.

## Declaration

```swift
var objectAfterChanges: ObjectType? { get }
```

<a id="Discussion"></a>

## Discussion

Read this object’s properties to retrieve updated metadata for the asset or collection. Using this object is equivalent to repeating the same fetch that returned the original object.

## See Also

### Getting the Changed Object

- [objectBeforeChanges](objectbeforechanges.md): An object that reflects the original state of the asset or collection it represents.

# objectAfterChanges (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

An object that reflects the current state of the asset or collection it represents.

## Declaration

```objectivec
@property (atomic, strong, readonly, nullable) ObjectType objectAfterChanges;
```

<a id="Discussion"></a>

## Discussion

Read this object’s properties to retrieve updated metadata for the asset or collection. Using this object is equivalent to repeating the same fetch that returned the original object.

## See Also

### Getting the Changed Object

- [objectBeforeChanges](objectbeforechanges.md): An object that reflects the original state of the asset or collection it represents.
