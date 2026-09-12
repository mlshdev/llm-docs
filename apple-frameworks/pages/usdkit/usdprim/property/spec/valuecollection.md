> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdprim/property/spec/valuecollection](https://developer.apple.com/documentation/usdkit/usdprim/property/spec/valuecollection)

# USDPrim.Property.Spec.ValueCollection

**Framework:** USDKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Value-related API for property specs that hold typed default values.

## Declaration

```swift
protocol ValueCollection
```

<a id="overview"></a>

## Overview

Only `USDPrim.Property.Spec` and `USDPrim.Attribute.Spec` conform to this protocol; `USDPrim.Relationship.Spec` does not, because relationships don’t store typed values.

## Topics

### Instance Properties

- [defaultValue](valuecollection/defaultvalue.md): The authored default value, or `nil` if not authored. Assigning `nil` clears the default.
- [typeName](valuecollection/typename.md): The property’s value type.
- [variability](valuecollection/variability.md): The property’s variability (varying, uniform, or config).

## Relationships

### Conforming Types

- [USDPrim.Attribute.Spec](../../attribute/spec.md)
- [USDPrim.Property.Spec](../spec.md)
