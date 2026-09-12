> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/systemprefersreducedresourceusage](https://developer.apple.com/documentation/uikit/uiapplication/systemprefersreducedresourceusage)

# systemPrefersReducedResourceUsage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the system prefers that the app reduce its resource usage.

## Declaration

```swift
var systemPrefersReducedResourceUsage: Bool { get }
```

<a id="discussion"></a>

## Discussion

When this value is `YES`, the system has entered a state where it would prefer apps to scale back resource-intensive work.

Use this to avoid or reduce expensive work. For example:

- Gate or simplify resource-intensive UI, such as 3D or AR viewers, advanced camera modes, or live effects.
- Choose lighter-weight paths, such as lower-resolution assets or fewer simultaneous operations.
- Defer or shrink non-essential background work, such as prefetching or precomputation.

Avoid performing or scheduling expensive work in response to changes in this property, as this could worsen resource usage.

> **Tip**

> For in-memory caching, consider using `NSCache` with `NSPurgeableData`, which automatically evicts entries under system memory pressure. Use `systemPrefersReducedResourceUsage` for higher-level decisions that `NSCache` cannot make on its own.

To respond to changes in views, read the `UITraitCollection/systemPrefersReducedResourceUsage` trait. From other contexts, observe [systemPrefersReducedResourceUsageDidChangeNotification](systemprefersreducedresourceusagedidchangenotification.md) and re-read this property.

# systemPrefersReducedResourceUsage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · tvOS 27.0+ · visionOS 27.0+

A Boolean value that indicates whether the system prefers that the app reduce its resource usage.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL systemPrefersReducedResourceUsage;
```

<a id="discussion"></a>

## Discussion

When this value is `YES`, the system has entered a state where it would prefer apps to scale back resource-intensive work.

Use this to avoid or reduce expensive work. For example:

- Gate or simplify resource-intensive UI, such as 3D or AR viewers, advanced camera modes, or live effects.
- Choose lighter-weight paths, such as lower-resolution assets or fewer simultaneous operations.
- Defer or shrink non-essential background work, such as prefetching or precomputation.

Avoid performing or scheduling expensive work in response to changes in this property, as this could worsen resource usage.

> **Tip**

> For in-memory caching, consider using `NSCache` with `NSPurgeableData`, which automatically evicts entries under system memory pressure. Use `systemPrefersReducedResourceUsage` for higher-level decisions that `NSCache` cannot make on its own.

To respond to changes in views, read the `UITraitCollection/systemPrefersReducedResourceUsage` trait. From other contexts, observe [UIApplicationSystemPrefersReducedResourceUsageDidChangeNotification](systemprefersreducedresourceusagedidchangenotification.md) and re-read this property.
