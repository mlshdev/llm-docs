> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsitemprovider/registergroupactivity(_:)](https://developer.apple.com/documentation/foundation/nsitemprovider/registergroupactivity(_:))

# registerGroupActivity(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 13.0+ · visionOS 1.0+

Registers a group activity instance with the specificed options.

## Declaration

```swift
@nonobjc func registerGroupActivity<ActivityType>(_ activity: ActivityType) where ActivityType : GroupActivity
```

## Parameters

- `activity`: The `GroupActivity` to register.

## See Also

### Registering group activities

- [registerGroupActivity(preparationHandler:)](registergroupactivity%28preparationhandler_%29.md): Registers a group activity instance asynchronously with the specified options.
