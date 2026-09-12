> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4compilertaskoptions/lookuparchives](https://developer.apple.com/documentation/metal/mtl4compilertaskoptions/lookuparchives)

# lookupArchives (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of archive instances that can potentially accelerate a compilation task.

## Declaration

```swift
var lookupArchives: [any MTL4Archive]? { get set }
```

<a id="discussion"></a>

## Discussion

The compiler can reduce the runtime of a compilation task if it finds an entry that matches a function description within any of the archives in this array. The compiler searches the archives in the order of the array’s element.

Consider adding archives to the array in scenarios that can benefit from the runtime savings, such as repeat builds or when your app can share compilation results across multiple contexts.

> **Important**

> Only add [MTL4Archive](../mtl4archive.md) instances to the array that are compatible with the Metal device.

# lookupArchives (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of archive instances that can potentially accelerate a compilation task.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSArray<id<MTL4Archive>> * lookupArchives;
```

<a id="discussion"></a>

## Discussion

The compiler can reduce the runtime of a compilation task if it finds an entry that matches a function description within any of the archives in this array. The compiler searches the archives in the order of the array’s element.

Consider adding archives to the array in scenarios that can benefit from the runtime savings, such as repeat builds or when your app can share compilation results across multiple contexts.

> **Important**

> Only add [MTL4Archive](../mtl4archive.md) instances to the array that are compatible with the Metal device.
