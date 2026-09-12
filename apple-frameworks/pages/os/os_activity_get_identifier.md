> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/os_activity_get_identifier](https://developer.apple.com/documentation/os/os_activity_get_identifier)

# os_activity_get_identifier

**Interface language:** Objective-C

**Framework:** os  
**Kind:** Function  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Retrieves the identifier for a given activity object.

## Declaration

```objectivec
extern os_activity_id_t os_activity_get_identifier(os_activity_t activity, os_activity_id_t *parent_id);
```

## Parameters

- `activity`: The activity to be identified.
- `parent_id`: On return, contains the identifier of the parent of the activity object, if any. Pass `NULL` if you don’t need this identifier.

<a id="return-value"></a>

## Return Value

The current activity identifier.

## See Also

### Retrieving an Activity Identifier

- [os_activity_id_t](os_activity_id_t.md): A number that uniquely identifies an activity.
