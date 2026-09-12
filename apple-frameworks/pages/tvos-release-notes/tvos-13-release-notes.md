> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvos-release-notes/tvos-13-release-notes](https://developer.apple.com/documentation/tvos-release-notes/tvos-13-release-notes)

# tvOS 13 Release Notes

**Kind:** Article

Update your apps to use new features, and test your apps against API changes.

<a id="overview"></a>

## Overview

The tvOS 13 SDK provides support for developing tvOS apps for Apple TV devices running tvOS 13. The SDK comes bundled with Xcode 11 available from the Mac App Store. For information on the compatibility requirements for Xcode 11, see [Xcode 11 Release Notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-11-release-notes).

<a id="AuthenticationServices"></a>

### AuthenticationServices

<a id="Known-Issues"></a>

#### Known Issues

- Passing both [ASAuthorizationAppleIDProvider](../authenticationservices/asauthorizationappleidprovider.md) and [ASAuthorizationPasswordProvider](../authenticationservices/asauthorizationpasswordprovider.md) to [ASAuthorizationController](../authenticationservices/asauthorizationcontroller.md) is not currently supported on tvOS. (50897359)

<a id="AVFoundation"></a>

### AVFoundation

<a id="New-Features"></a>

#### New Features

- [AVFoundation](../avfoundation.md) now supports encoding video with alpha channels using HEVC. Videos encoded in this manner are broadly supported in AVFoundation APIs, and by Safari within web pages. Technical details of the format can be found in the Interoperability Profile specification. (8045917)

<a id="MapKit"></a>

### MapKit

<a id="Known-Issues"></a>

#### Known Issues

- [MKMarkerAnnotationView](../mapkit/mkmarkerannotationview.md) doesn’t render the default glyph image. (52143655)

  **Workaround:** Set the [glyphImage](../mapkit/mkmarkerannotationview/glyphimage.md) property on [MKMarkerAnnotationView](../mapkit/mkmarkerannotationview.md) instances.
- [MKMarkerAnnotationView](../mapkit/mkmarkerannotationview.md) doesn’t render the markers for annotations using the default tint color. (51908728)

  **Workaround:** Set the [markerTintColor](../mapkit/mkmarkerannotationview/markertintcolor.md) property on [MKMarkerAnnotationView](../mapkit/mkmarkerannotationview.md) instances.

<a id="Networking"></a>

### Networking

<a id="Known-Issues"></a>

#### Known Issues

- The [urlSession(\_:taskIsWaitingForConnectivity:)](../foundation/urlsessiontaskdelegate/urlsession%28__taskiswaitingforconnectivity_%29.md) delegate callback might not function as expected. (54309264)

<a id="Deprecations"></a>

#### Deprecations

- Removed support for FTP and File URL schemes for Proxy Automatic Configuration (PAC). HTTP and HTTPS are the only supported URL schemes for PAC. This affects all PAC configurations including, but not limited to, configurations set using Settings, System Preferences, Profiles, and [URLSession](../foundation/urlsession.md) APIs such as [connectionProxyDictionary](../foundation/urlsessionconfiguration/connectionproxydictionary.md) and [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](../cfnetwork/cfnetworkexecuteproxyautoconfigurationurl%28________%29.md). (28578280)
- The `URLSession` and [NSURLConnection](../foundation/nsurlconnection.md) APIs no longer support SPDY. Servers should use HTTP 2 or HTTP 1.1. (43391641)

<a id="SwiftUI"></a>

### SwiftUI

<a id="New-Features"></a>

#### New Features

- The [EnvironmentValues](https://developer.apple.com/documentation/swiftui/environmentvalues) structure has four new properties for reading accessibility values from the environment: [accessibilityDifferentiateWithoutColor](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilitydifferentiatewithoutcolor), [accessibilityReduceTransparency](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityreducetransparency), [accessibilityReduceMotion](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityreducemotion), and [accessibilityInvertColors](https://developer.apple.com/documentation/swiftui/environmentvalues/accessibilityinvertcolors). (51712481)
- The `color(_:)` modifier for [Text](https://developer.apple.com/documentation/swiftui/text) is renamed [foregroundColor(\_:)](https://developer.apple.com/documentation/swiftui/text/foregroundcolor%28_:%29) for consistency with the more general [foregroundColor(\_:)](https://developer.apple.com/documentation/swiftui/view/foregroundcolor%28_:%29) view modifier. (50391847)
- The `BindableObject` protocol’s requirement is now `willChange` instead of `didChange`, and should now be sent before the object changes rather than after it changes. This change allows for improved coalescing of change notifications. (51580731)
- The [RangeReplaceableCollection](https://developer.apple.com/documentation/swift/rangereplaceablecollection) protocol is extended to include a [remove(atOffsets:)](https://developer.apple.com/documentation/swift/rangereplaceablecollection/remove%28atoffsets:%29) method and the [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection) protocol is extended to include a [move(fromOffsets:toOffset:)](https://developer.apple.com/documentation/swift/mutablecollection/move%28fromoffsets:tooffset:%29) method. Each new method takes [IndexSet](../foundation/indexset.md) instances that you use with the `onMove(perform:)` and `onDelete(perform:)` modifiers on [ForEach](https://developer.apple.com/documentation/swiftui/foreach) views. (51991601)
- Added improved presentation modifiers: [sheet(isPresented:onDismiss:content:)](https://developer.apple.com/documentation/swiftui/view/sheet%28ispresented:ondismiss:content:%29), [actionSheet(isPresented:content:)](https://developer.apple.com/documentation/swiftui/view/actionsheet%28ispresented:content:%29), and [alert(isPresented:content:)](https://developer.apple.com/documentation/swiftui/view/alert%28ispresented:content:%29) — along with `isPresented` in the environment — replace the existing `presentation(_:)`, `Sheet`, `Modal`, and `PresentationLink` types. (52075730)
- Updated the APIs for creating animations. The basic animations are now named after the curve type — such as [linear](https://developer.apple.com/documentation/swiftui/animation/linear) and [easeInOut](https://developer.apple.com/documentation/swiftui/animation/easeinout). The interpolation-based `spring(mass:stiffness:damping:initialVelocity:)` animation is now [interpolatingSpring(mass:stiffness:damping:initialVelocity:)](https://developer.apple.com/documentation/swiftui/animation/interpolatingspring%28mass:stiffness:damping:initialvelocity:%29), and `fluidSpring(stiffness:dampingFraction:blendDuration:timestep:idleThreshold:)` is now [spring(response:dampingFraction:blendDuration:)](https://developer.apple.com/documentation/swiftui/animation/spring%28response:dampingfraction:blendduration:%29) or [interactiveSpring(response:dampingFraction:blendDuration:)](https://developer.apple.com/documentation/swiftui/animation/interactivespring%28response:dampingfraction:blendduration:%29), depending on whether or not the animation is driven interactively. (50280375)
- Added an initializer for creating a [Font](https://developer.apple.com/documentation/swiftui/font) from a [CTFont](../coretext/ctfont.md). (51849885)

<a id="Known-Issues"></a>

#### Known Issues

- [Image](https://developer.apple.com/documentation/swiftui/image) instances don’t use resizing information configured in asset catalogs. Configure the size of an image using the [resizable(capInsets:resizingMode:)](https://developer.apple.com/documentation/swiftui/image/resizable%28capinsets:resizingmode:%29) modifier instead. (49114577)

<a id="Deprecations"></a>

#### Deprecations

- The `identified(by:)` method on the [Collection](https://developer.apple.com/documentation/swift/collection) protocol is deprecated in favor of dedicated `init(_:id:selection:rowContent:)` and `init(_:id:content:)` initializers. (52976883)
- The `relativeWidth(_:)`, `relativeHeight(_:)`, and `relativeSize(width:height:)` modifiers are deprecated. Use other modifiers like [frame(width:height:alignment:)](https://developer.apple.com/documentation/swiftui/view/frame%28width:height:alignment:%29) instead. (51494692)

<a id="UIKit"></a>

### UIKit

<a id="Known-Issues"></a>

#### Known Issues

- Except for [selectionIndicatorTintColor](../uikit/uitabbarappearance/selectionindicatortintcolor.md), properties in the new tab bar appearance API aren’t reflected on the screen. (49792597)

<a id="Xcode"></a>

### Xcode

<a id="New-Features"></a>

#### New Features

- [CAMetalLayer](../quartzcore/cametallayer.md) is now available in the Simulator. (45101325)

## See Also

### tvOS 13

- [tvOS 13.4.8 Release Notes](tvos-13_4_8-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.4.5 Release Notes](tvos-13_4_5-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.4 Release Notes](tvos-13_4-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.3.1 Release Notes](tvos-13_3_1-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.3 Release Notes](tvos-13_3-release-notes.md): Update your apps to use new features, and test your apps against API changes.
- [tvOS 13.2 Release Notes](tvos-13_2-release-notes.md): Update your apps to use new features, and test your apps against API changes.
