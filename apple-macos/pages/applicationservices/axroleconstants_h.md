> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axroleconstants_h](https://developer.apple.com/documentation/applicationservices/axroleconstants_h)

# AXRoleConstants.h

**Interface languages:** Swift, Objective-C

**Framework:** Application Services  
**Kind:** API Collection

<a id="overview"></a>

## Overview

Every role offers a variety of attributes. There are some attributes that must be supported by every element, regardless of role. Other attributes will be supported by an element if/when appropriate data is supplied by the application. These attributes' meanings and values are generally obvious. In order to save space, the following attributes are not listed in the role documentation unless the role handles them in a special fashion:

<a id="2556059"></a>

**Listing 1**

```occ
 
 
   	AXRole
   	AXRoleDescription
   	AXDescription
   	AXHelp
   	AXParent
   	AXChildren
   	AXWindow
   	AXTopLevelUIElement
   	AXEnabled
   	AXSize
   	AXPosition
 
 
```

Every attribute supported by a given role may have one or more symbols after its name:

<a id="2556060"></a>

**Listing 2**

```occ
 
 
   	w means the attribute is writable.
   	o means it is an optional attribute that doesn't necessarily need to be
   		supported by all elements with that role.
 
 
```

## Topics

### Constants

- [Miscellaneous Defines](axroleconstants_h/miscellaneous_defines.md)
