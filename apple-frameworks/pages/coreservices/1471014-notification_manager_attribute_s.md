> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1471014-notification_manager_attribute_s](https://developer.apple.com/documentation/coreservices/1471014-notification_manager_attribute_s)

# Notification Manager Attribute Selectors

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Specify feature availability information for the Notification Manager.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [gestaltNotificationMgrAttr](1471014-notification_manager_attribute_s/gestaltnotificationmgrattr.md): .The Gestalt selector which you pass to the `Gestalt` function to determine Notification Manager attributes.
- [gestaltNotificationPresent](1471014-notification_manager_attribute_s/gestaltnotificationpresent.md): True if the Notification Manager exists.
