> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/simd16](https://developer.apple.com/documentation/swift/simd16)

# SIMD16

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A vector of 16 scalar values.

## Declaration

```swift
@frozen struct SIMD16<Scalar> where Scalar : SIMDScalar
```

## Topics

### Operators

- [&\*(\_:\_:)](simd16/&_%28____%29-3jz9u.md): Conforms when `Scalar` is `Int64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-43ajj.md): Conforms when `Scalar` is `UInt64`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-4a6qp.md): Conforms when `Scalar` is `Int8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-4zuql.md): Conforms when `Scalar` is `Int16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-4zv7c.md): Conforms when `Scalar` is `Int`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-7i8iq.md): Conforms when `Scalar` is `UInt16`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-8aay.md): Conforms when `Scalar` is `Int32`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-8qh3c.md): Conforms when `Scalar` is `UInt8`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-8s02d.md): Conforms when `Scalar` is `UInt`. The pointwise wrapping product of two vectors.
- [&\*(\_:\_:)](simd16/&_%28____%29-9c5w8.md): Conforms when `Scalar` is `UInt32`. The pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-2fxx.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-2ozt.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-431dy.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-59aos.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-7qxtu.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-7vufg.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-86clv.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-8ipcm.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-8ns2j.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&\*=(\_:\_:)](simd16/&_=%28____%29-90eby.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the pointwise wrapping product of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-1rbi5.md): Conforms when `Scalar` is `Int32`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-3zikk.md): Conforms when `Scalar` is `Int16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-4ry81.md): Conforms when `Scalar` is `Int8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-53uwf.md): Conforms when `Scalar` is `UInt64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-6v5ob.md): Conforms when `Scalar` is `UInt16`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-7lioc.md): Conforms when `Scalar` is `UInt8`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-88d2b.md): Conforms when `Scalar` is `Int64`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-89nsq.md): Conforms when `Scalar` is `Int`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-8lh6.md): Conforms when `Scalar` is `UInt`. The wrapping sum of two vectors.
- [&+(\_:\_:)](simd16/&+%28____%29-8p8yu.md): Conforms when `Scalar` is `UInt32`. The wrapping sum of two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-1lux7.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-3c91u.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-3kapr.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-47uuh.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-4dedj.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-5h7k4.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-655al.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-8omt4.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-92m2u.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping sum of the two vectors.
- [&+=(\_:\_:)](simd16/&+=%28____%29-x0sa.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping sum of the two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-1wze6.md): Conforms when `Scalar` is `UInt`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-31c30.md): Conforms when `Scalar` is `Int8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-35ekp.md): Conforms when `Scalar` is `UInt64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-6h8mf.md): Conforms when `Scalar` is `Int64`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-7j0jg.md): Conforms when `Scalar` is `Int32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-8b6wo.md): Conforms when `Scalar` is `Int`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-8ch5t.md): Conforms when `Scalar` is `UInt32`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-8gzbm.md): Conforms when `Scalar` is `UInt8`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-8o8ii.md): Conforms when `Scalar` is `UInt16`. The wrapping difference of two vectors.
- [&-(\_:\_:)](simd16/&-%28____%29-92xn2.md): Conforms when `Scalar` is `Int16`. The wrapping difference of two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-10oay.md): Conforms when `Scalar` is `UInt16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-1ai4t.md): Conforms when `Scalar` is `Int`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-5spxt.md): Conforms when `Scalar` is `UInt64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-6jeyx.md): Conforms when `Scalar` is `Int8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-7c9mk.md): Conforms when `Scalar` is `Int64`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-8h0jh.md): Conforms when `Scalar` is `Int16`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-8to3f.md): Conforms when `Scalar` is `Int32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-98gxx.md): Conforms when `Scalar` is `UInt32`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-9qwn0.md): Conforms when `Scalar` is `UInt8`. Updates the left hand side with the wrapping difference of the two vectors.
- [&-=(\_:\_:)](simd16/&-=%28____%29-nw21.md): Conforms when `Scalar` is `UInt`. Updates the left hand side with the wrapping difference of the two vectors.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-1ae8e.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-1l0cj.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-2gltl.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-2jsjw.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-2pivh.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-2xmnu.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-39xyk.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-3xq7t.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-4x5vy.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-58zb1.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-67wkl.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-7kuzv.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-7lff8.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-7qa2d.md): Conforms when `Scalar` is `Float16`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-844f5.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-9cw25.md): Conforms when `Scalar` is `Double`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-9lfmc.md): Conforms when `Scalar` is `Float`. Pointwise compare not equal to.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-9nj9k.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise inequality comparison.
- [.!=(\_:\_:)](simd16/'.!=%28____%29-qnl3.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise inequality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-16kf.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-1l1tk.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-1vakh.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-1xwkp.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-3pndh.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-47g0s.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-4sqrx.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-53vw5.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-5i6bl.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-67wxy.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-6i9z2.md): Conforms when `Scalar` is `Float16`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-6ipsi.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-6jnvr.md): Conforms when `Scalar` is `Double`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-6zlux.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-8i1u0.md): Conforms when `Scalar` is `Float`. Pointwise compare equal to.
- [.==(\_:\_:)](simd16/'.==%28____%29-8okry.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-96x9h.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-981nx.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise equality comparison.
- [.==(\_:\_:)](simd16/'.==%28____%29-xap8.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise equality comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-1gg5x.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-1hnih.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-1yapo.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-22hl5.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-247dy.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-29gkg.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\<(\_:\_:)](simd16/'._%28____%29-2d0he.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-2s9fi.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd16/'._%28____%29-2yb5z.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd16/'._%28____%29-367ec.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd16/'._%28____%29-3r9pf.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-3zij8.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd16/'._%28____%29-49cs.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\>(\_:\_:)](simd16/'._%28____%29-4vvej.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd16/'._%28____%29-4wbyc.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd16/'._%28____%29-4xfjj.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-4xri5.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-55y8l.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd16/'._%28____%29-5dpb8.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-5hfkp.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-64xs4.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than.
- [.\<(\_:\_:)](simd16/'._%28____%29-6quf8.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-6wr9s.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd16/'._%28____%29-7juax.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-7psao.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\>(\_:\_:)](simd16/'._%28____%29-7t6z2.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than.
- [.\>(\_:\_:)](simd16/'._%28____%29-7t9zj.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-7vlsh.md): Conforms when `Scalar` is `Float`. Pointwise compare less than.
- [.\<(\_:\_:)](simd16/'._%28____%29-7znh8.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\>(\_:\_:)](simd16/'._%28____%29-8am3p.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-8dtp4.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-8qcfz.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-9ac5b.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-9c809.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than comparison.
- [.\>(\_:\_:)](simd16/'._%28____%29-9j179.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than.
- [.\<(\_:\_:)](simd16/'._%28____%29-9nrwn.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than comparison.
- [.\<(\_:\_:)](simd16/'._%28____%29-9scg.md): Conforms when `Scalar` is `Double`. Pointwise compare less than.
- [.\>(\_:\_:)](simd16/'._%28____%29-a9n1.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-14d8f.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-1bny9.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-1trne.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-2bclb.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-2o5rp.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-2oju.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-2y87h.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-2z4yx.md): Conforms when `Scalar` is `UInt16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-42xth.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-45cv3.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-4k5eh.md): Conforms when `Scalar` is `UInt64`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-4m3cu.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-4nuu5.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-4p2y.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-4qynn.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-4wwbt.md): Conforms when `Scalar` is `Float`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-4xw83.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-5kvvx.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-5l4wz.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-5vkjl.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-5xlbw.md): Conforms when `Scalar` is `Int8`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-6cwpc.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-6fnb8.md): Conforms when `Scalar` is `Double`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-6q5rp.md): Conforms when `Scalar` is `Int64`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-7d069.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-7q4iw.md): Conforms when `Scalar` is `UInt32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-7wjn6.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-8bsot.md): Conforms when `Scalar` is `Float16`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-8f7t.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-8tnwf.md): Conforms when `Scalar` is `UInt8`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-91926.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-9cehz.md): Conforms when `Scalar` is `UInt`. A vector mask with the result of a pointwise greater-than-or-equal-to comparison.
- [.\>=(\_:\_:)](simd16/'._=%28____%29-9hc1b.md): Conforms when `Scalar` is `Double`. Pointwise compare greater than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-9n875.md): Conforms when `Scalar` is `Int32`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-9usod.md): Conforms when `Scalar` is `Float`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-bkja.md): Conforms when `Scalar` is `Float16`. Pointwise compare less than or equal to.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-lyc.md): Conforms when `Scalar` is `Int`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.
- [.\<=(\_:\_:)](simd16/'._=%28____%29-oaos.md): Conforms when `Scalar` is `Int16`. A vector mask with the result of a pointwise less-than-or-equal-to comparison.

### Initializers

- [init()](simd16/init%28%29.md): Creates a vector with zero in all lanes.
- [init(\_:)](simd16/init%28__%29-17z75.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of floating-point values.
- [init(\_:)](simd16/init%28__%29-4dxbh.md): Conforms when `Scalar` conforms to `BinaryFloatingPoint` and `SIMDScalar`. Creates a new vector from the given vector of integers.
- [init(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](simd16/init%28________________________________%29.md): Creates a new vector from the given elements.
- [init(\_:rounding:)](simd16/init%28__rounding_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, rounding the given vector’s of elements using the specified rounding rule.
- [init(clamping:)](simd16/init%28clamping_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, clamping the values of the given vector’s elements if necessary.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-1mquz.md): Conforms when `Scalar` is `Int8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-25jlp.md): Conforms when `Scalar` is `UInt16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-317xp.md): Conforms when `Scalar` is `Float`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-3s760.md): Conforms when `Scalar` is `UInt`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-50b5o.md): Conforms when `Scalar` is `Float16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-6t1hy.md): Conforms when `Scalar` is `Int`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-7dzmw.md): Conforms when `Scalar` is `Int32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-7i2ky.md): Conforms when `Scalar` is `UInt8`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-896up.md): Conforms when `Scalar` is `Int64`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-8oksd.md): Conforms when `Scalar` is `Int16`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-98vj9.md): A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-9csr5.md): Conforms when `Scalar` is `Double`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-9n9nb.md): Conforms when `Scalar` is `UInt32`. A vector formed by concatenating lowHalf and highHalf.
- [init(lowHalf:highHalf:)](simd16/init%28lowhalf_highhalf_%29-x1pd.md): Conforms when `Scalar` is `UInt64`. A vector formed by concatenating lowHalf and highHalf.
- [init(repeating:)](simd16/init%28repeating_%29-19t5y.md): Conforms when `Scalar` is `UInt`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-1o6ez.md): Conforms when `Scalar` is `Int32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-3sxrw.md): Conforms when `Scalar` is `UInt8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-3w8tt.md): Conforms when `Scalar` is `UInt16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-4tu0z.md): Conforms when `Scalar` is `UInt64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-4u7ce.md): Conforms when `Scalar` is `UInt32`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-4v2jw.md): Conforms when `Scalar` is `Int`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-51d9b.md): Conforms when `Scalar` is `Int64`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-6n4wg.md): Conforms when `Scalar` is `Double`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-7kz74.md): Conforms when `Scalar` is `Float`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-97ogh.md): Conforms when `Scalar` is `Int8`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-9oy6t.md): Conforms when `Scalar` is `Int16`. A vector with the specified scalar in all lanes.
- [init(repeating:)](simd16/init%28repeating_%29-cisq.md): Conforms when `Scalar` is `Float16`. A vector with the specified scalar in all lanes.
- [init(truncatingIfNeeded:)](simd16/init%28truncatingifneeded_%29.md): Conforms when `Scalar` conforms to `FixedWidthInteger` and `SIMDScalar`. Creates a new vector from the given vector, truncating the bit patterns of the given vector’s elements if necessary.

### Instance Properties

- [evenHalf](simd16/evenhalf.md): A half-length vector made up of the even elements of the vector.
- [hashValue](simd16/hashvalue.md): The hash value.
- [highHalf](simd16/highhalf.md): A half-length vector made up of the high elements of the vector.
- [lowHalf](simd16/lowhalf.md): A half-length vector made up of the low elements of the vector.
- [oddHalf](simd16/oddhalf.md): A half-length vector made up of the odd elements of the vector.
- [scalarCount](simd16/scalarcount.md): The number of scalars in the vector.

### Subscripts

- [subscript(\_:)](simd16/subscript%28__%29.md): Accesses the scalar at the specified position.

### Type Aliases

- [SIMD16.ArrayLiteralElement](simd16/arrayliteralelement.md): The type of the elements of an array literal.
- [SIMD16.MaskStorage](simd16/maskstorage.md): The mask type resulting from pointwise comparisons of this vector type.

### Default Implementations

- [CustomDebugStringConvertible Implementations](simd16/customdebugstringconvertible-implementations.md)
- [Equatable Implementations](simd16/equatable-implementations.md)
- [SIMD Implementations](simd16/simd-implementations.md)

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
- [SIMD8](simd8.md): A vector of eight scalar values.
- [SIMD32](simd32.md): A vector of 32 scalar values.
- [SIMD64](simd64.md): A vector of 64 scalar values.
