> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidernamespacepolicy/materializeeagerly](https://developer.apple.com/documentation/fileprovider/nsfileprovidernamespacepolicy/materializeeagerly)

# NSFileProviderNamespacePolicy.materializeEagerly (Swift)

**Framework:** File Provider  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Download this folder eagerly, make sure it’s always fully enumerated Keep downloading remote updates eagerly. Prevent eviction on low disk pressure and other triggers.

## Declaration

```swift
case materializeEagerly
```

<a id="discussion"></a>

## Discussion

When a folder with the inherited policy is moved into a folder with this policy, the system will automatically schedule a download.

# NSFileProviderNamespacePolicyMaterializeEagerly (Objective-C)

**Framework:** File Provider  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · macOS 27.0+ · visionOS 27.0+

Download this folder eagerly, make sure it’s always fully enumerated Keep downloading remote updates eagerly. Prevent eviction on low disk pressure and other triggers.

## Declaration

```objectivec
NSFileProviderNamespacePolicyMaterializeEagerly
```

<a id="discussion"></a>

## Discussion

When a folder with the inherited policy is moved into a folder with this policy, the system will automatically schedule a download.
