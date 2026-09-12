> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sessioncreationflags/sessionkeepcurrentbootstrap](https://developer.apple.com/documentation/security/sessioncreationflags/sessionkeepcurrentbootstrap)

# sessionKeepCurrentBootstrap (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The caller has allocated sub-bootstrap.

## Declaration

```swift
static var sessionKeepCurrentBootstrap: SessionCreationFlags { get }
```

<a id="Discussion"></a>

## Discussion

If you create a subset port on your own, you can force

the [SessionCreate(\_:\_:)](../sessioncreate%28____%29.md) function to use it by passing this flag in the `flags` parameter. However, you can’t supersede a prior call that way; only a single [SessionCreate(\_:\_:)](../sessioncreate%28____%29.md) call is allowed for each session.

# sessionKeepCurrentBootstrap (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The caller has allocated sub-bootstrap.

## Declaration

```objectivec
sessionKeepCurrentBootstrap
```

<a id="Discussion"></a>

## Discussion

If you create a subset port on your own, you can force

the [SessionCreate](../sessioncreate%28____%29.md) function to use it by passing this flag in the `flags` parameter. However, you can’t supersede a prior call that way; only a single [SessionCreate](../sessioncreate%28____%29.md) call is allowed for each session.
