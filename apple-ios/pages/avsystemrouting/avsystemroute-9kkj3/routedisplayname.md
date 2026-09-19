> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avsystemrouting/avsystemroute-9kkj3/routedisplayname

# routeDisplayName

**Interface language:** Objective-C

**Framework:** AVSystemRouting  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The user-facing display name of the remote device or route.

## Declaration

```objectivec
@property (copy, readonly) NSString * routeDisplayName;
```

<a id="discussion"></a>

## Discussion

Use this property to show the name of the destination device in your app’s user interface. The display name typically reflects a custom name for the device or a default name the system provides.
