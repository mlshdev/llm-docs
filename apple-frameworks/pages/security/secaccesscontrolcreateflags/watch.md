> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secaccesscontrolcreateflags/watch](https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/watch)

# watch (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 15.0)

Constraint to access an item with a watch.

## Declaration

```swift
static var watch: SecAccessControlCreateFlags { get }
```

<a id="Discussion"></a>

## Discussion

The system attempts to locate a nearby, paired Apple Watch running watchOS 6 or later.

# kSecAccessControlWatch (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

Constraint to access an item with a watch.

## Declaration

```objectivec
kSecAccessControlWatch
```

<a id="Discussion"></a>

## Discussion

The system attempts to locate a nearby, paired Apple Watch running watchOS 6 or later.
