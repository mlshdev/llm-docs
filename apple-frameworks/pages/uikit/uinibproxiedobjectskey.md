> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uinibproxiedobjectskey](https://developer.apple.com/documentation/uikit/uinibproxiedobjectskey)

# UINibProxiedObjectsKey

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The runtime replacement objects for any proxy objects in the nib file.

> Use the [UINibExternalObjects](uinib/optionskey/externalobjects.md) key instead.

## Declaration

```objectivec
extern NSString * const UINibProxiedObjectsKey;
```

<a id="Discussion"></a>

## Discussion

In iOS 2, the value for this key is a dictionary that contains the runtime replacement objects for any proxy objects used in the nib file. In this dictionary, the keys are the names associated with the proxy objects and the values are the actual objects from your code that should be used in their place.
