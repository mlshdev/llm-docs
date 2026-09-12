> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/ionetworkmedium/1810064-addmedium](https://developer.apple.com/documentation/kernel/ionetworkmedium/1810064-addmedium)

# addMedium

**Interface language:** Objective-C

**Framework:** Kernel

Adds an IONetworkMedium object to a dictionary.

## Declaration

```objectivec
static bool addMedium(
 OSDictionary *dict, 
 const IONetworkMedium *medium); 
```

## Parameters

- `dict`: An OSDictionary object where the medium object should be added as a new entry.
- `medium`: The IONetworkMedium object to add to the dictionary.

<a id="return_value"></a>

## Return Value

Returns true on success, false otherwise.

<a id="overview"></a>

## Overview

A helper function to add an IONetworkMedium object to a given dictionary. The name of the medium is used as the key for the new dictionary entry.

## See Also

### Miscellaneous

- [free](1810085-free.md): Frees the IONetworkMedium object.
- [getFlags](1810101-getflags.md)
- [getIndex](1810123-getindex.md)
- [getKey](1810155-getkey.md)
- [getMediumWithIndex](1810208-getmediumwithindex.md): Finds a medium object from a dictionary with a given index.
- [getMediumWithType](1810258-getmediumwithtype.md): Finds a medium object from a dictionary with a given type.
- [getName](1810301-getname.md)
- [getSpeed](1810359-getspeed.md)
- [getType](1810404-gettype.md)
- [init](1810453-init.md): Initializes an IONetworkMedium object.
- [isEqualTo(const IONetworkMedium \*)](1810500-isequalto.md): Tests for equality between two IONetworkMedium objects.
- [isEqualTo(const OSMetaClassBase \*)](1810544-isequalto.md): Tests for equality between a IONetworkMedium object and an OSObject.
- [medium](1810580-medium.md): Factory method that allocates and initializes an IONetworkMedium object.
- [nameForType](1810627-namefortype.md): Creates a name that describes a medium type.
- [removeMedium](1810658-removemedium.md): Removes an IONetworkMedium object from a dictionary.
- [serialize](1810690-serialize.md): Serializes the IONetworkMedium object.
