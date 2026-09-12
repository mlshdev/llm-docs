> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemrights](https://developer.apple.com/documentation/coreservices/kmditemrights)

# kMDItemRights (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Provides a link to information about rights held in and over the resource. A CFString.

## Declaration

```swift
let kMDItemRights: CFString!
```

<a id="discussion"></a>

## Discussion

Contains a rights management statement for the resource, or reference a service providing such information. Rights information often encompasses Intellectual Property Rights (IPR), Copyright, and various Property Rights. 

If this attribute is absent, no assumptions can be made about the status of these and other rights with respect to the resource.

# kMDItemRights (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Provides a link to information about rights held in and over the resource. A CFString.

## Declaration

```objectivec
const CFStringRef kMDItemRights;
```

<a id="discussion"></a>

## Discussion

Contains a rights management statement for the resource, or reference a service providing such information. Rights information often encompasses Intellectual Property Rights (IPR), Copyright, and various Property Rights. 

If this attribute is absent, no assumptions can be made about the status of these and other rights with respect to the resource.
