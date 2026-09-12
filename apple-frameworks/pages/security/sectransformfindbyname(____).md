> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectransformfindbyname(_:_:)](https://developer.apple.com/documentation/security/sectransformfindbyname(_:_:))

# SecTransformFindByName(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Finds a member of a transform group by its name.

> SecTransform is no longer supported

## Declaration

```swift
func SecTransformFindByName(_ transform: SecGroupTransform, _ name: CFString) -> SecTransform?
```

## Parameters

- `transform`: The transform group to be searched.
- `name`: The name of the transform to be found.

<a id="return-value"></a>

## Return Value

The transform group member, or `NULL` if the member was not found.

<a id="Discussion"></a>

## Discussion

When a transform instance is created you give it a unique name. This name can be used to find that instance in a group. While it is possible to use the [SecTransformSetAttribute(\_:\_:\_:\_:)](sectransformsetattribute%28________%29.md) function to change a transform’s name after creating it, this is not recommended because doing so causes the [SecTransformFindByName(\_:\_:)](sectransformfindbyname%28____%29.md) function to misbehave.

# SecTransformFindByName (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.7+ (deprecated in 12.0)

Finds a member of a transform group by its name.

> SecTransform is no longer supported

## Declaration

```objectivec
extern SecTransformRefSecTransformFindByName(SecGroupTransformRef transform, CFStringRef name);
```

## Parameters

- `transform`: The transform group to be searched.
- `name`: The name of the transform to be found.

<a id="return-value"></a>

## Return Value

The transform group member, or `NULL` if the member was not found.

<a id="Discussion"></a>

## Discussion

When a transform instance is created you give it a unique name. This name can be used to find that instance in a group. While it is possible to use the [SecTransformSetAttribute](sectransformsetattribute%28________%29.md) function to change a transform’s name after creating it, this is not recommended because doing so causes the [SecTransformFindByName](sectransformfindbyname%28____%29.md) function to misbehave.
