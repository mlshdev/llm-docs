> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd8](https://developer.apple.com/documentation/swift/simd8)

# SIMD8

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector of eight scalar values.

## Declaration

```swift
@frozen struct SIMD8<Scalar> where Scalar : SIMDScalar
```

## Topics

### Operators

- [&\*(\_:\_:)](simd8/&_%28____%29-2dda6.md): Conforms when `Scalar` is `Int`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-2dhqm.md): Conforms when `Scalar` is `UInt32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-3zc2z.md): Conforms when `Scalar` is `UInt`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-46zar.md): Conforms when `Scalar` is `UInt64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-4mxqw.md): Conforms when `Scalar` is `Int64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-5av1i.md): Conforms when `Scalar` is `Int8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-880kc.md): Conforms when `Scalar` is `UInt8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-8eoet.md): Conforms when `Scalar` is `Int16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-o5i6.md): Conforms when `Scalar` is `Int32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd8/&_%28____%29-y8q9.md): Conforms when `Scalar` is `UInt16`. The pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-1xusy.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-353av.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-35hyl.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-3cae1.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-4gmzh.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-5cdle.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-6ii7o.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-8a0j1.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-98uee.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd8/&_=%28____%29-pffy.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-1edf1.md): Conforms when `Scalar` is `Int64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-2x46m.md): Conforms when `Scalar` is `UInt64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-33coa.md): Conforms when `Scalar` is `Int16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-3ul36.md): Conforms when `Scalar` is `Int8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-6m4bg.md): Conforms when `Scalar` is `UInt32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-7xsr.md): Conforms when `Scalar` is `UInt8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-8fe3f.md): Conforms when `Scalar` is `UInt16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-9jl8h.md): Conforms when `Scalar` is `Int32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-9xkk1.md): Conforms when `Scalar` is `Int`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd8/&+%28____%29-gdqm.md): Conforms when `Scalar` is `UInt`. The wrapping sum of two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-2g5dk.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-2hztm.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-4m3yq.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-76tam.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-7dn69.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-86kst.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-89da6.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-8m45k.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-8t73v.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd8/&+=%28____%29-j3ws.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping sum of the two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-15jqz.md): Conforms when `Scalar` is `Int8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-1hac1.md): Conforms when `Scalar` is `Int`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-35imm.md): Conforms when `Scalar` is `UInt16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-4gpbp.md): Conforms when `Scalar` is `UInt`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-4iod.md): Conforms when `Scalar` is `Int64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-4okd7.md): Conforms when `Scalar` is `UInt32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-5i14e.md): Conforms when `Scalar` is `Int32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-7vdw0.md): Conforms when `Scalar` is `UInt8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-9cpsb.md): Conforms when `Scalar` is `Int16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd8/&-%28____%29-9vohd.md): Conforms when `Scalar` is `UInt64`. The wrapping difference of two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-1w9a6.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-1zg3c.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-3rt61.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-4il3a.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-76vz8.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-7pnwo.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-801jw.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-87ja5.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-98lnu.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd8/&-=%28____%29-9yk9.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping difference of the two vectors.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-16zq0.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-17abh.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-182nw.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-1fvwl.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-1wj2z.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-1zfjk.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-36264.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-3bn2m.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-3cu2r.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-3d9xb.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-3y6ak.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-4lymv.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-57mv.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-6d27n.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-7rbua.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-82vwe.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-98x77.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-9entj.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd8/'.!=%28____%29-9yjnv.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-13hfz.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-15sza.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-1nd3n.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-1sivj.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-267zc.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-2lf7d.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-3s0g.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-43f7i.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-4pwbs.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-5qucm.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-63th2.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-7c19g.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-8497l.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-88omu.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-8hri.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-mnby.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-qwvi.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd8/'.==%28____%29-rbji.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd8/'.==%28____%29-tycy.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise equality comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-1c72i.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-1narf.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-1r4s4.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-2mxcj.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-2p9oz.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-3f0bc.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-3hoi.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd8/'._%28____%29-3inye.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd8/'._%28____%29-4ayah.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd8/'._%28____%29-4ltbx.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-4surp.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-4wlgd.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd8/'._%28____%29-4wlhw.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-5fo7o.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd8/'._%28____%29-5l344.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-5n70.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-5s4e8.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-5z2wr.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-5zlf4.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd8/'._%28____%29-64j9a.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd8/'._%28____%29-66vyd.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-6blon.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd8/'._%28____%29-6hcnd.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-6i4zk.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-6t3vq.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd8/'._%28____%29-6wn36.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd8/'._%28____%29-7fq8p.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-7k3f0.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-7swb9.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd8/'._%28____%29-7thec.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd8/'._%28____%29-7z7lr.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd8/'._%28____%29-8qdlx.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd8/'._%28____%29-8uwqc.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd8/'._%28____%29-9jcx8.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd8/'._%28____%29-9jr9i.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd8/'._%28____%29-al2z.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd8/'._%28____%29-j3x4.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd8/'._%28____%29-vpnh.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-167bs.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-1mll5.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-1zabi.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-24r7f.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-2dact.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-2opee.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-2u2hi.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-3buog.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-3cuio.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-3ui8g.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-46zej.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-4ibxs.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-4qumd.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-525gk.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-53bxt.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-5d0hv.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-5whw.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-5xadh.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-5zfg3.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-64j20.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-6c148.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-70he1.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-7bs44.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-7hls5.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-7pmkh.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-7tqmb.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-7vdqx.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-7wxxr.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-85788.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-8bd6y.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-8d091.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-8u7sr.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-8uo9e.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-95mry.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-9qpjh.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-da81.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd8/'._=%28____%29-e0zd.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd8/'._=%28____%29-ynx1.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.

### Initializers

- [init()](simd8/init%28%29.md): Creates a vector with zero in all lanes.
- [init(\_:)](simd8/init%28__%29-20rv4.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of floating-point values.
- [init(\_:)](simd8/init%28__%29-8ko8m.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of integers.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:)](simd8/init%28________________%29.md): Creates a new vector from the given elements.
- [init(\_:rounding:)](simd8/init%28__rounding_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.
- [init(clamping:)](simd8/init%28clamping_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, clamping the values of the given vector’s elements if necessary.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-40zc3.md): Conforms when `Scalar` is `Float16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-4u8y9.md): Conforms when `Scalar` is `Int32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-67fcd.md): Conforms when `Scalar` is `Double`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-6peuv.md): Conforms when `Scalar` is `Int8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-76rts.md): Conforms when `Scalar` is `Int16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-7qon.md): Conforms when `Scalar` is `Float`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-84qph.md): Conforms when `Scalar` is `UInt64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-88i1v.md): Conforms when `Scalar` is `UInt32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-8i4y2.md): Conforms when `Scalar` is `Int`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-8zo02.md): Conforms when `Scalar` is `UInt8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-98i5t.md): Conforms when `Scalar` is `UInt16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-9rdov.md): Conforms when `Scalar` is `UInt`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-buyh.md): A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd8/init%28lowhalf_highhalf_%29-i4ty.md): Conforms when `Scalar` is `Int64`. A vector formed by concatenating lowHalf and highHalf.
- [init(repeating:)](simd8/init%28repeating_%29-15kd1.md): Conforms when `Scalar` is `Int32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-1mtdp.md): Conforms when `Scalar` is `UInt16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-1t999.md): Conforms when `Scalar` is `Double`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-2mug9.md): Conforms when `Scalar` is `Int8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-46m7s.md): Conforms when `Scalar` is `UInt8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-4irfd.md): Conforms when `Scalar` is `Float`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-5u1bp.md): Conforms when `Scalar` is `Float16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-6y056.md): Conforms when `Scalar` is `UInt`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-6ziwg.md): Conforms when `Scalar` is `Int`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-732zj.md): Conforms when `Scalar` is `UInt32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-7zjp6.md): Conforms when `Scalar` is `Int16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-rhrb.md): Conforms when `Scalar` is `Int64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd8/init%28repeating_%29-xa31.md): Conforms when `Scalar` is `UInt64`. A vector with the specified scalar in all lanes.
- [init(truncatingIfNeeded:)](simd8/init%28truncatingifneeded_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, truncating the bit patterns of the given vector’s elements if necessary.

### Instance Properties

- [evenHalf](simd8/evenhalf.md): A half-length vector made up of the even elements of the vector.
- [hashValue](simd8/hashvalue.md): The hash value.
- [highHalf](simd8/highhalf.md): A half-length vector made up of the high elements of the vector.
- [lowHalf](simd8/lowhalf.md): A half-length vector made up of the low elements of the vector.
- [oddHalf](simd8/oddhalf.md): A half-length vector made up of the odd elements of the vector.
- [scalarCount](simd8/scalarcount.md): The number of scalars in the vector.

### Subscripts

- [subscript(\_:)](simd8/subscript%28__%29.md): Accesses the scalar at the specified position.

### Type Aliases

- [SIMD8.ArrayLiteralElement](simd8/arrayliteralelement.md): The type of the elements of an array literal.
- [SIMD8.MaskStorage](simd8/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](simd8/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](simd8/equatable-implementations.md)
- [SIMD Implementations](simd8/simd-implementations.md)

## Relationships

### Conforms To

- [BitwiseCopyable](bitwisecopyable.md)
- [ConvertibleFromBytes](convertiblefrombytes.md)
- [ConvertibleToBytes](convertibletobytes.md)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByArrayLiteral](expressiblebyarrayliteral.md)
- [Hashable](hashable.md)
- [SIMD](simd.md)
- [SIMDStorage](simdstorage.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### SIMD Vectors

- [SIMD2](simd2.md): A vector of two scalar values.
- [SIMD3](simd3.md): A vector of three scalar values.
- [SIMD4](simd4.md): A vector of four scalar values.
- [SIMD16](simd16.md): A vector of 16 scalar values.
- [SIMD32](simd32.md): A vector of 32 scalar values.
- [SIMD64](simd64.md): A vector of 64 scalar values.
