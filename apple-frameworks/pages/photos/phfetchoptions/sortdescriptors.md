> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phfetchoptions/sortdescriptors](https://developer.apple.com/documentation/photos/phfetchoptions/sortdescriptors)

# sortDescriptors (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A list of sort descriptors, specifying an order for the fetched objects.

## Declaration

```swift
var sortDescriptors: [NSSortDescriptor]? { get set }
```

<a id="Discussion"></a>

## Discussion

Construct sort descriptors with the properties of the objects that you want to fetch, listed in the [PHFetchOptions](../phfetchoptions.md) table. For example, the following code sorts by creation date to find the oldest asset in the photo library.

**Swift**

```swift
let fetchOptions = PHFetchOptions()
fetchOptions.sortDescriptors = [NSSortDescriptor(key: "creationDate", ascending: true)]
let fetchResult = PHAsset.fetchAssets(with: fetchOptions)
return fetchResult.firstObject
```

**Objective-C**

```objc
PHFetchOptions *fetchOptions = [PHFetchOptions new];
fetchOptions.sortDescriptors = @[
    [NSSortDescriptor sortDescriptorWithKey:@"creationDate" ascending:YES],
];
PHFetchResult *fetchResult = [PHAsset fetchAssetsWithOptions:fetchOptions];
return [fetchResult firstObject];
```

## See Also

### Sorting and Filtering Fetch Results

- [predicate](predicate.md): A predicate that specifies which properties to select results by and that also specifies any constraints on selection.

# sortDescriptors (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 10.0+ · visionOS 1.0+

A list of sort descriptors, specifying an order for the fetched objects.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSArray<NSSortDescriptor *> * sortDescriptors;
```

<a id="Discussion"></a>

## Discussion

Construct sort descriptors with the properties of the objects that you want to fetch, listed in the [PHFetchOptions](../phfetchoptions.md) table. For example, the following code sorts by creation date to find the oldest asset in the photo library.

**Swift**

```swift
let fetchOptions = PHFetchOptions()
fetchOptions.sortDescriptors = [NSSortDescriptor(key: "creationDate", ascending: true)]
let fetchResult = PHAsset.fetchAssets(with: fetchOptions)
return fetchResult.firstObject
```

**Objective-C**

```objc
PHFetchOptions *fetchOptions = [PHFetchOptions new];
fetchOptions.sortDescriptors = @[
    [NSSortDescriptor sortDescriptorWithKey:@"creationDate" ascending:YES],
];
PHFetchResult *fetchResult = [PHAsset fetchAssetsWithOptions:fetchOptions];
return [fetchResult firstObject];
```

## See Also

### Sorting and Filtering Fetch Results

- [predicate](predicate.md): A predicate that specifies which properties to select results by and that also specifies any constraints on selection.
