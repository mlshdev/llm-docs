> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationstate-1smq1/customstateforkey:](https://developer.apple.com/documentation/uikit/uiconfigurationstate-1smq1/customstateforkey:)

# customStateForKey:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the custom state for the specified custom state key.

## Declaration

```objectivec
- (id) customStateForKey:(UIConfigurationStateCustomKey) key;
```

## See Also

### Managing configuration states

- [traitCollection](traitcollection.md): The traits that describe the current layout environment of the view, such as the user interface style and layout direction.
- [setCustomState:forKey:](setcustomstate_forkey_.md): Sets the custom state for the specified custom state key.
- [objectForKeyedSubscript:](objectforkeyedsubscript_.md): Retrieves the object for the specified custom state key.
- [setObject:forKeyedSubscript:](setobject_forkeyedsubscript_.md): Sets the object for the specified custom state key.
