> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/ccnttokenrecord](https://developer.apple.com/documentation/coreservices/ccnttokenrecord)

# ccntTokenRecord (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Stores token information used by the AEResolve functionwhile locating a range of objects.

## Declaration

```swift
struct ccntTokenRecord
```

<a id="overview"></a>

## Overview

When the [AEResolve(\_:\_:\_:)](1449720-aeresolve.md) functioncalls an object accessor function to locate a range of objects, theApple Event Manager replaces the descriptor of type `typeCurrentContainer` witha token for the container of each boundary object. When using `AEResolve` toresolve the object specifier, your application doesn’t need toexamine the contents of this token, because the Apple Event Managerkeeps track of it.

If your application attempts to resolve some or all of theobject specifier without calling `AEResolve`,the application may need to examine the token before it can locatethe boundary objects. The token provided by the Apple Event Managerfor a boundary object’s container is a descriptor of type `typeToken` whosedata storage pointer refers to a structure of type `ccntTokenRecord`.

## Topics

### Initializers

- [init()](ccnttokenrecord/1442803-init.md)
- [init(tokenClass:token:)](ccnttokenrecord/1443203-init.md)

### Instance Properties

- [token](ccnttokenrecord/1445534-token.md): A token for the current container. (Token is definedin [AEDisposeToken(\_:)](1446783-aedisposetoken.md). See [AEDesc](aedesc.md).
- [tokenClass](ccnttokenrecord/1444917-tokenclass.md): The class ID of the container represented by the `token` parameter.See [DescType](desctype.md).

# ccntTokenRecord (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Stores token information used by the AEResolve functionwhile locating a range of objects.

## Declaration

```objectivec
typedef struct ccntTokenRecord {
    ...
} ccntTokenRecord;
```

<a id="overview"></a>

## Overview

When the [AEResolve](1449720-aeresolve.md) functioncalls an object accessor function to locate a range of objects, theApple Event Manager replaces the descriptor of type `typeCurrentContainer` witha token for the container of each boundary object. When using `AEResolve` toresolve the object specifier, your application doesn’t need toexamine the contents of this token, because the Apple Event Managerkeeps track of it.

If your application attempts to resolve some or all of theobject specifier without calling `AEResolve`,the application may need to examine the token before it can locatethe boundary objects. The token provided by the Apple Event Managerfor a boundary object’s container is a descriptor of type `typeToken` whosedata storage pointer refers to a structure of type `ccntTokenRecord`.

## Topics

### Instance Properties

- [token](ccnttokenrecord/1445534-token.md): A token for the current container. (Token is definedin [AEDisposeToken](1446783-aedisposetoken.md). See [AEDesc](aedesc.md).
- [tokenClass](ccnttokenrecord/1444917-tokenclass.md): The class ID of the container represented by the `token` parameter.See [DescType](desctype.md).
