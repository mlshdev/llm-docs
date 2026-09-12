> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/kmditemappleloopskeyfiltertype](https://developer.apple.com/documentation/coreservices/kmditemappleloopskeyfiltertype)

# kMDItemAppleLoopsKeyFilterType (Swift)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Specifies key filtering information about a loop. Loops are matched against projects that often in a major or minor key. A CFString.

## Declaration

```swift
let kMDItemAppleLoopsKeyFilterType: CFString!
```

<a id="discussion"></a>

## Discussion

To assist users in identifying loops that will "fit" with their compositions, loops can be tagged with one of the following key filters: "AnyKey" "Minor" "Major" "NeitherKey" "BothKeys". "AnyKey" means that it fits with anything (whether in a major key, minor key or neither). "Minor" fits with compositions in a minor key. "NeitherKey" doesn't work well with compositions that are in major or minor key. "BothKeys" means it fits with major or minor key.

# kMDItemAppleLoopsKeyFilterType (Objective-C)

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** macOS 10.4+

Specifies key filtering information about a loop. Loops are matched against projects that often in a major or minor key. A CFString.

## Declaration

```objectivec
const CFStringRef kMDItemAppleLoopsKeyFilterType;
```

<a id="discussion"></a>

## Discussion

To assist users in identifying loops that will "fit" with their compositions, loops can be tagged with one of the following key filters: "AnyKey" "Minor" "Major" "NeitherKey" "BothKeys". "AnyKey" means that it fits with anything (whether in a major key, minor key or neither). "Minor" fits with compositions in a minor key. "NeitherKey" doesn't work well with compositions that are in major or minor key. "BothKeys" means it fits with major or minor key.
