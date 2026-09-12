> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registergroupactivity(preparationhandler:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registergroupactivity(preparationhandler:))

# registerGroupActivity(preparationHandler:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

Registers a group activity instance asynchronously with the specified options.

## Declaration

```swift
@nonobjc func registerGroupActivity<ActivityType>(preparationHandler: @escaping () async throws -> ActivityType) where ActivityType : GroupActivity
```

## Parameters

- `preparationHandler`: The handler the service invokes when it registers the `GroupActivity`.

## See Also

### Registering group activities

- [registerGroupActivity(\_:)](registergroupactivity%28__%29.md): Registers a group activity instance with the specificed options.
