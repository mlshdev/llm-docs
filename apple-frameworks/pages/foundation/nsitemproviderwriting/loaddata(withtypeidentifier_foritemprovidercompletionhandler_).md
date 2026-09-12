> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemproviderwriting/loaddata(withtypeidentifier:foritemprovidercompletionhandler:)](https://developer.apple.com/documentation/foundation/nsitemproviderwriting/loaddata(withtypeidentifier:foritemprovidercompletionhandler:))

# loadData(withTypeIdentifier:forItemProviderCompletionHandler:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Loads data of a particular type, identified by the given UTI.

## Declaration

```swift
func loadData(withTypeIdentifier typeIdentifier: String, forItemProviderCompletionHandler completionHandler: @escaping @Sendable (Data?, (any Error)?) -> Void) -> Progress?
```

## Parameters

- `typeIdentifier`: The uniform type identifier (UTI) identifying the type of data to load.
- `completionHandler`: The handler that’s called after the data is loaded.

<a id="return-value"></a>

## Return Value

The progress of the data load process.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the `typeIdentifier` parameter is set to one of the elements in the `writableTypeIdentifiersForItemProvider` array.

# loadDataWithTypeIdentifier:forItemProviderCompletionHandler: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Loads data of a particular type, identified by the given UTI.

## Declaration

```objectivec
- (NSProgress *) loadDataWithTypeIdentifier:(NSString *) typeIdentifier forItemProviderCompletionHandler:(void (^)(NSData *data, NSError *error)) completionHandler;
```

## Parameters

- `typeIdentifier`: The uniform type identifier (UTI) identifying the type of data to load.
- `completionHandler`: The handler that’s called after the data is loaded.

<a id="return-value"></a>

## Return Value

The progress of the data load process.

<a id="Discussion"></a>

## Discussion

When the system calls this method, the `typeIdentifier` parameter is set to one of the elements in the `writableTypeIdentifiersForItemProvider` array.
