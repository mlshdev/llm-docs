> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore/remove(_:)](https://developer.apple.com/documentation/classkit/clsdatastore/remove(_:))

# remove(\_:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Marks a context for removal.

## Declaration

```swift
func remove(_ context: CLSContext)
```

## Parameters

- `context`: The context to remove.

<a id="Discussion"></a>

## Discussion

If your context hierarchy changes, either because your app’s content is dynamic, or as a result of an app update, you might need to remove old contexts from the data store. Call this method to mark a context for removal. Call the [save(completion:)](save%28completion_%29.md) method to commit the change.

When you remove a context, the framework removes all of its decendants as well.

# removeContext: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Marks a context for removal.

## Declaration

```objectivec
- (void) removeContext:(CLSContext *) context;
```

## Parameters

- `context`: The context to remove.

<a id="Discussion"></a>

## Discussion

If your context hierarchy changes, either because your app’s content is dynamic, or as a result of an app update, you might need to remove old contexts from the data store. Call this method to mark a context for removal. Call the [saveWithCompletion:](save%28completion_%29.md) method to commit the change.

When you remove a context, the framework removes all of its decendants as well.
