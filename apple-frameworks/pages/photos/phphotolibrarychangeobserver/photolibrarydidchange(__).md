> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrarychangeobserver/photolibrarydidchange(_:)](https://developer.apple.com/documentation/photos/phphotolibrarychangeobserver/photolibrarydidchange(_:))

# photoLibraryDidChange(\_:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Tells your observer that a set of changes has occurred in the Photos library.

## Declaration

```swift
func photoLibraryDidChange(_ changeInstance: PHChange)
```

## Parameters

- `changeInstance`: An object representing the changes.

<a id="Discussion"></a>

## Discussion

Use the provided [PHChange](../phchange.md) object to find out which, if any, of the albums or collections you’re interested in have changed and get detailed change information. Call the change object’s [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) method to get information about changes to an asset’s contents or metadata properties or about a collection’s metadata properties. Call the change object’s [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) to get information about changes to a collection’s list of members (or to any other fetch result).

Photos calls this method on an arbitrary queue. If you need to update your app’s UI as a result of the change, dispatch to the main queue.

# photoLibraryDidChange: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

Tells your observer that a set of changes has occurred in the Photos library.

## Declaration

```objectivec
- (void) photoLibraryDidChange:(PHChange *) changeInstance;
```

## Parameters

- `changeInstance`: An object representing the changes.

<a id="Discussion"></a>

## Discussion

Use the provided [PHChange](../phchange.md) object to find out which, if any, of the albums or collections you’re interested in have changed and get detailed change information. Call the change object’s [changeDetailsForObject:](https://developer.apple.com/documentation/photos/phchange/changedetailsforobject:) method to get information about changes to an asset’s contents or metadata properties or about a collection’s metadata properties. Call the change object’s [changeDetails(for:)](../phchange/changedetails%28for_%29-33a6n.md) to get information about changes to a collection’s list of members (or to any other fetch result).

Photos calls this method on an arbitrary queue. If you need to update your app’s UI as a result of the change, dispatch to the main queue.
