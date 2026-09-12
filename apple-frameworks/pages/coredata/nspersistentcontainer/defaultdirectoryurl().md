> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/defaultdirectoryurl()](https://developer.apple.com/documentation/coredata/nspersistentcontainer/defaultdirectoryurl())

# defaultDirectoryURL() (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the location of the directory that contains the persistent stores.

## Declaration

```swift
class func defaultDirectoryURL() -> URL
```

<a id="return-value"></a>

## Return Value

An [NSURL](../../foundation/nsurl.md) that references the directory in which the persistent store(s) will be located or are currently located.

<a id="Discussion"></a>

## Discussion

This method returns a platform-dependent [NSURL](../../foundation/nsurl.md) at which the persistent store(s) will be located or are currently located. This method can be overridden in a subclass of [NSPersistentContainer](../nspersistentcontainer.md).

## See Also

### Accessing the Default Directory

- [defaultDirectoryURL](defaultdirectoryurl-swift.type.property.md): The location of the directory that contains the persistent stores.

# defaultDirectoryURL (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns the location of the directory that contains the persistent stores.

## Declaration

```objectivec
+ (NSURL *) defaultDirectoryURL;
```

<a id="return-value"></a>

## Return Value

An [NSURL](../../foundation/nsurl.md) that references the directory in which the persistent store(s) will be located or are currently located.

<a id="Discussion"></a>

## Discussion

This method returns a platform-dependent [NSURL](../../foundation/nsurl.md) at which the persistent store(s) will be located or are currently located. This method can be overridden in a subclass of [NSPersistentContainer](../nspersistentcontainer.md).
