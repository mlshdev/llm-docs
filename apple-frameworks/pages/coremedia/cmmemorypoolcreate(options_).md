> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmemorypoolcreate(options:)](https://developer.apple.com/documentation/coremedia/cmmemorypoolcreate(options:))

# CMMemoryPoolCreate(options:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a memory pool.

## Declaration

```swift
func CMMemoryPoolCreate(options: CFDictionary?) -> CMMemoryPool
```

## Parameters

- `options`: A dictionary that defines the age-out period for the pool.

<a id="return-value"></a>

## Return Value

A new memory pool.

## Topics

### Creation Options

- [kCMMemoryPoolOption_AgeOutPeriod](kcmmemorypooloption_ageoutperiod.md): The period of time before the pool recycles its memory.

# CMMemoryPoolCreate (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a memory pool.

## Declaration

```objectivec
extern CMMemoryPoolRefCMMemoryPoolCreate(CFDictionaryRef options);
```

## Parameters

- `options`: A dictionary that defines the age-out period for the pool.

<a id="return-value"></a>

## Return Value

A new memory pool.

## Topics

### Creation Options

- [kCMMemoryPoolOption_AgeOutPeriod](kcmmemorypooloption_ageoutperiod.md): The period of time before the pool recycles its memory.
