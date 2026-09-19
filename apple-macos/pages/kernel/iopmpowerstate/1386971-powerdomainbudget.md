> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iopmpowerstate/1386971-powerdomainbudget

# powerDomainBudget

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Property  
**Availability:** macOS 10.0+

Describes power in milliWatts a domain in this state can deliver to its children. Unused; drivers may specify 0. }

## Declaration

```objectivec
unsigned long powerDomainBudget;
```
