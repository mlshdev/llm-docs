> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterdataprovider/apply(_:completionhandler:)](https://developer.apple.com/documentation/networkextension/nefilterdataprovider/apply(_:completionhandler:))

# apply(\_:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Applies a set of filtering rules associated with the provider and changes the default filtering action.

## Declaration

```swift
func apply(_ settings: NEFilterSettings?, completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func apply(_ settings: NEFilterSettings?) async throws
```

## Parameters

- `settings`: A [NEFilterSettings](../nefiltersettings.md) object containing the filter settings to apply to the system. Pass `nil` to revert to the default settings, which are an empty list of rules and a default action of [NEFilterAction.filterData](../nefilteraction/filterdata.md).
- `completionHandler`: A Swift closure or ObjectiveC block that executes when the system finishes applying the settings. It receives an [NSError](../../foundation/nserror.md) parameter; a non-`nil` value that indicates there’s an error contidition.

## See Also

### Changing filter settings

- [NEFilterSettings](../nefiltersettings.md): The rules and other settings that define the operation of a filter.

# applySettings:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Applies a set of filtering rules associated with the provider and changes the default filtering action.

## Declaration

```objectivec
- (void) applySettings:(NEFilterSettings *) settings completionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `settings`: A [NEFilterSettings](../nefiltersettings.md) object containing the filter settings to apply to the system. Pass `nil` to revert to the default settings, which are an empty list of rules and a default action of [NEFilterActionFilterData](../nefilteraction/filterdata.md).
- `completionHandler`: A Swift closure or ObjectiveC block that executes when the system finishes applying the settings. It receives an [NSError](../../foundation/nserror.md) parameter; a non-`nil` value that indicates there’s an error contidition.

## See Also

### Changing filter settings

- [NEFilterSettings](../nefiltersettings.md): The rules and other settings that define the operation of a filter.
