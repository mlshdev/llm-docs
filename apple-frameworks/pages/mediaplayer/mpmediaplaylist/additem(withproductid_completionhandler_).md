> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmediaplaylist/additem(withproductid:completionhandler:)](https://developer.apple.com/documentation/mediaplayer/mpmediaplaylist/additem(withproductid:completionhandler:))

# addItem(withProductID:completionHandler:) (Swift)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the item associated with the product identifier to the end of the playlist.

## Declaration

```swift
func addItem(withProductID productID: String, completionHandler: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
func addItem(withProductID productID: String) async throws
```

## Parameters

- `productID`: The product identifier for the item to add.
- `completionHandler`: A block that the system calls after it adds the item to the playlist.

  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

The method adds a single media item associated with the product identifier to the playlist.

## See Also

### Adding media items to a playlist

- [add(\_:completionHandler:)](add%28__completionhandler_%29.md): Adds an array of media items to the end of the playlist.

# addItemWithProductID:completionHandler: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 13.1+ · visionOS 1.0+

Adds the item associated with the product identifier to the end of the playlist.

## Declaration

```objectivec
- (void) addItemWithProductID:(NSString *) productID completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `productID`: The product identifier for the item to add.
- `completionHandler`: A block that the system calls after it adds the item to the playlist.

  - **error**: If an error occurred, this parameter holds the error object that explains the error. Otherwise, the value of this parameter is [nil](../../objectivec/nil-227m0.md).

<a id="Discussion"></a>

## Discussion

The method adds a single media item associated with the product identifier to the playlist.

## See Also

### Adding media items to a playlist

- [addMediaItems:completionHandler:](add%28__completionhandler_%29.md): Adds an array of media items to the end of the playlist.
