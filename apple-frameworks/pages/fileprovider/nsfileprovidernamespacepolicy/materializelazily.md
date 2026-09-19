> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidernamespacepolicy/materializelazily

# NSFileProviderNamespacePolicy.materializeLazily (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Enumerate this folder lazily (i.e upon access) if it is dataless. Keep populate new items below this folder eagerly if it’s already on disk.

## Declaration

```swift
case materializeLazily
```

<a id="discussion"></a>

## Discussion

This is the default policy on the root.

# NSFileProviderNamespacePolicyMaterializeLazily (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS 27.0+

Enumerate this folder lazily (i.e upon access) if it is dataless. Keep populate new items below this folder eagerly if it’s already on disk.

## Declaration

```objectivec
NSFileProviderNamespacePolicyMaterializeLazily
```

<a id="discussion"></a>

## Discussion

This is the default policy on the root.
