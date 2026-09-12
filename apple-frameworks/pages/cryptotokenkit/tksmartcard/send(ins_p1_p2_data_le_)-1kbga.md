> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcard/send(ins:p1:p2:data:le:)-1kbga](https://developer.apple.com/documentation/cryptotokenkit/tksmartcard/send(ins:p1:p2:data:le:)-1kbga)

# send(ins:p1:p2:data:le:)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Synchronously sends an APDU command to the smart card.

## Declaration

```swift
func send(ins: UInt8, p1: UInt8, p2: UInt8, data: Data? = nil, le: Int? = nil) throws -> (sw: UInt16, response: Data)
```

## Parameters

- `ins`: Instruction byte of the APDU command.
- `p1`: P1 parameter byte.
- `p2`: P2 parameter byte.
- `data`: Optional command data.
- `le`: Optional expected response length.

<a id="return-value"></a>

## Return Value

A tuple containing the status word (sw) and response data.

<a id="discussion"></a>

## Discussion

Use this method when you need synchronous execution, such as within `withSession` blocks or when calling from synchronous code paths.

> **Throws**

> An error if the command fails.
