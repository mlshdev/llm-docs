> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaaccessibility/macaptionappearanceiscustomized(_:)](https://developer.apple.com/documentation/mediaaccessibility/macaptionappearanceiscustomized(_:))

# MACaptionAppearanceIsCustomized(\_:) (Swift)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
func MACaptionAppearanceIsCustomized(_ domain: MACaptionAppearanceDomain) -> Bool
```

## Parameters

- `domain`: Preference domain, see  @link MACaptionAppearanceDomain @/link.

<a id="return-value"></a>

## Return Value

A boolean indicating if the currently-active style has been customized by the user

<a id="discussion"></a>

## Discussion

Provides a boolean indicating if the currently-active style has been customized by the user. This is useful for some clients who may need different fallback strategies for customized styles vs system-default styles.

# MACaptionAppearanceIsCustomized (Objective-C)

**Framework:** Media Accessibility  
**Kind:** Function  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
extern bool MACaptionAppearanceIsCustomized(MACaptionAppearanceDomain domain);
```

## Parameters

- `domain`: Preference domain, see  @link MACaptionAppearanceDomain @/link.

<a id="return-value"></a>

## Return Value

A boolean indicating if the currently-active style has been customized by the user

<a id="discussion"></a>

## Discussion

Provides a boolean indicating if the currently-active style has been customized by the user. This is useful for some clients who may need different fallback strategies for customized styles vs system-default styles.
