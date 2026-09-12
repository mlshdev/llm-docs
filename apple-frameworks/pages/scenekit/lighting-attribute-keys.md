> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/lighting-attribute-keys](https://developer.apple.com/documentation/scenekit/lighting-attribute-keys)

# Lighting Attribute Keys (Swift)

**Framework:** SceneKit  
**Kind:** API Collection

Keys for specifying the behavior of a light using the [attribute(forKey:)](scnlight/attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](scnlight/setattribute%28__forkey_%29.md) methods.

<a id="overview"></a>

## Overview

You can also get, set, or animate changes to the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) with the keys listed above.

You provide or retrieve a value for each key as an [NSNumber](../foundation/nsnumber.md) object containing the appropriate numeric type.

## Topics

### Constants

- [SCNLightAttenuationStartKey](scnlightattenuationstartkey.md): Deprecated. The distance from the light at which its intensity begins to diminish.
- [SCNLightAttenuationEndKey](scnlightattenuationendkey.md): Deprecated. The distance from the light at which its intensity is completely diminished.
- [SCNLightAttenuationFalloffExponentKey](scnlightattenuationfalloffexponentkey.md): Deprecated. The transition curve for the light’s intensity between its attenuation start and end distances.
- [SCNLightSpotInnerAngleKey](scnlightspotinneranglekey.md): Deprecated. The angle, in degrees, of the area fully lit by a spotlight.
- [SCNLightSpotOuterAngleKey](scnlightspotouteranglekey.md): Deprecated. The angle, in degrees, of the area partially lit by a spotlight.
- [SCNLightShadowFarClippingKey](scnlightshadowfarclippingkey.md): Deprecated. The maximum distance between the light and a visible surface for casting shadows.
- [SCNLightShadowNearClippingKey](scnlightshadownearclippingkey.md): Deprecated. The minimum distance between the light and a visible surface for casting shadows.

## See Also

### Managing Light Attributes

- [name](scnlight/name.md): A name associated with the light.
- [attribute(forKey:)](scnlight/attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute(\_:forKey:)](scnlight/setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.

# Lighting Attribute Keys (Objective-C)

**Framework:** SceneKit  
**Kind:** API Collection

Keys for specifying the behavior of a light using the [attributeForKey:](scnlight/attribute%28forkey_%29.md) and [setAttribute:forKey:](scnlight/setattribute%28__forkey_%29.md) methods.

<a id="overview"></a>

## Overview

You can also get, set, or animate changes to the values of lighting attributes using [Key-value coding](https://developer.apple.com/library/archive/documentation/General/Conceptual/DevPedia-CocoaCore/KeyValueCoding.html#//apple_ref/doc/uid/TP40008195-CH25) with the keys listed above.

You provide or retrieve a value for each key as an [NSNumber](../foundation/nsnumber.md) object containing the appropriate numeric type.

## Topics

### Constants

- [SCNLightAttenuationStartKey](scnlightattenuationstartkey.md): Deprecated. The distance from the light at which its intensity begins to diminish.
- [SCNLightAttenuationEndKey](scnlightattenuationendkey.md): Deprecated. The distance from the light at which its intensity is completely diminished.
- [SCNLightAttenuationFalloffExponentKey](scnlightattenuationfalloffexponentkey.md): Deprecated. The transition curve for the light’s intensity between its attenuation start and end distances.
- [SCNLightSpotInnerAngleKey](scnlightspotinneranglekey.md): Deprecated. The angle, in degrees, of the area fully lit by a spotlight.
- [SCNLightSpotOuterAngleKey](scnlightspotouteranglekey.md): Deprecated. The angle, in degrees, of the area partially lit by a spotlight.
- [SCNLightShadowFarClippingKey](scnlightshadowfarclippingkey.md): Deprecated. The maximum distance between the light and a visible surface for casting shadows.
- [SCNLightShadowNearClippingKey](scnlightshadownearclippingkey.md): Deprecated. The minimum distance between the light and a visible surface for casting shadows.

## See Also

### Managing Light Attributes

- [name](scnlight/name.md): A name associated with the light.
- [attributeForKey:](scnlight/attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute:forKey:](scnlight/setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
