> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkaccesspoint/trigger(gameactivitydefinitionid:handler:)-9hemd](https://developer.apple.com/documentation/gamekit/gkaccesspoint/trigger(gameactivitydefinitionid:handler:)-9hemd)

# trigger(gameActivityDefinitionID:handler:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the game activity creation view for the provided activity definition ID.

## Declaration

```swift
func trigger(gameActivityDefinitionID: String, handler: (@Sendable () -> Void)? = nil)
```

```swift
func trigger(gameActivityDefinitionID: String) async
```

# triggerAccessPointWithGameActivityDefinitionID:handler: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Displays the game activity creation view for the provided activity definition ID.

## Declaration

```objectivec
- (void) triggerAccessPointWithGameActivityDefinitionID:(NSString *) gameActivityDefinitionID handler:(void (^)()) handler;
```
